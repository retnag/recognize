<?php

namespace OCA\Recognize\Service;

use OCA\Recognize\Db\FaceCluster;
use OCA\Recognize\Db\FaceClusterMapper;
use OCA\Recognize\Db\FaceDetection;
use OCA\Recognize\Db\FaceDetectionMapper;
use Rubix\ML\Clusterers\DBSCAN;
use Rubix\ML\Datasets\Unlabeled;
use Rubix\ML\Graph\Trees\BallTree;
use Rubix\ML\Kernels\Distance\Euclidean;

class FaceClusterAnalyzer {
	public const MIN_CLUSTER_DENSITY = 2;
	public const MAX_INNER_CLUSTER_RADIUS = 0.45;

	private FaceDetectionMapper $faceDetections;
	private FaceClusterMapper $faceClusters;
	private TagManager $tagManager;
	private Logger $logger;

	public function __construct(FaceDetectionMapper $faceDetections, FaceClusterMapper $faceClusters, TagManager $tagManager, Logger $logger) {
		$this->faceDetections = $faceDetections;
		$this->faceClusters = $faceClusters;
		$this->tagManager = $tagManager;
		$this->logger = $logger;
	}

	/**
	 * @throws \OCP\DB\Exception
	 * @throws \JsonException
	 */
	public function calculateClusters(string $userId) {
		/**
		 * @var $detections FaceDetection[]
		 */
		$detections = $this->faceDetections->findByUserId($userId);

		if (count($detections) === 0) {
			$this->logger->debug('No face detections found');
			return;
		}

		// Here we use RubixMLs DBSCAN clustering algorithm
		$dataset = new Unlabeled(array_map(function (FaceDetection $detection) : array {
			return $detection->getVector();
		}, $detections));
		$clusterer = new DBSCAN(self::MAX_INNER_CLUSTER_RADIUS, self::MIN_CLUSTER_DENSITY, new BallTree(20, new Euclidean()));
		$results = $clusterer->predict($dataset);
		$numClusters = max($results);

		$this->logger->debug('Found '.$numClusters.' face clusters');

		for ($i = 0; $i <= $numClusters; $i++) {
			$keys = array_keys($results, $i);
			$clusterDetections = array_map(function ($key) use ($detections) : FaceDetection {
				return $detections[$key];
			}, $keys);
			$detectionsWithClusters = array_map(function ($detection) : array {
				return [$detection, $this->faceClusters->findByDetectionId($detection->getId())];
			}, $clusterDetections);

			// Since recognize works incrementally, we need to check if some of these face
			// detections have been added to an existing cluster already
			$alreadyClustered = array_values(array_filter($detectionsWithClusters, function ($item) : bool {
				return count($item[1]) >= 1;
			}));
			$notYetClustered = array_filter($detectionsWithClusters, function ($item) : bool {
				return count($item[1]) === 0;
			});

			if (count($alreadyClustered) > 0) {
				$uniqueOldClusterIds = array_unique(array_map(function ($item) {
					return $item[1][0]->getId();
				}, $alreadyClustered));
				if (count($uniqueOldClusterIds) === 1) {
					// There's only one old cluster for all already clustered detections in this new cluster, so we'll use that
					$cluster = $alreadyClustered[0][1][0];
				} else {
					// This should be an edge case and not happen often:
					// This new cluster contains detections from different existing clusters
					// we need a completely new cluster
					$cluster = new FaceCluster();
					$cluster->setTitle('');
					$cluster->setUserId($userId);
					$cluster = $this->faceClusters->insert($cluster);
				}
			} else {
				// we need a completely new cluster
				$cluster = new FaceCluster();
				$cluster->setTitle('');
				$cluster->setUserId($userId);

				/**
				 * @var FaceCluster $cluster
				 */
				$cluster = $this->faceClusters->insert($cluster);
			}
			foreach ($notYetClustered as $item) {
				$detection = $item[0];
				$this->faceDetections->assocWithCluster($detection, $cluster);
				if ($cluster->getTitle()) {
					$this->tagManager->assignTags($detection->getFileId(), [$cluster->getTitle()]);
				}
			}
		}
	}
}
