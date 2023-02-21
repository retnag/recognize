<?php
/*
 * Copyright (c) 2022 The Recognize contributors.
 * This file is licensed under the Affero General Public License version 3 or later. See the COPYING file.
 */

namespace OCA\Recognize\Command;

use OCA\Recognize\Service\TagManager;
use OCA\Recognize\Vendor\OCA\Recognize\Vendor\Symfony\Component\Console\Command\Command;
use OCA\Recognize\Vendor\OCA\Recognize\Vendor\Symfony\Component\Console\Input\InputInterface;
use OCA\Recognize\Vendor\OCA\Recognize\Vendor\Symfony\Component\Console\Output\OutputInterface;

class RemoveLegacyTags extends Command {
	private TagManager $tagManager;

	public function __construct(TagManager $tagManager) {
		parent::__construct();
		$this->tagManager = $tagManager;
	}

	/**
	 * Configure the command
	 *
	 * @return void
	 */
	protected function configure() {
		$this->setName('recognize:remove-legacy-tags')
			->setDescription('Remove tags set by old recognize versions');
	}

	/**
	 * Execute the command
	 *
	 * @param InputInterface  $input
	 * @param OutputInterface $output
	 *
	 * @return int
	 */
	protected function execute(InputInterface $input, OutputInterface $output): int {
		try {
			/** @var list<string> $tagNames */
			$tagNames = \json_decode(file_get_contents(__DIR__ . '/../../src/things.json'), true);
			if (JSON_ERROR_NONE !== json_last_error()) {
				throw new \Exception('JSON error');
			}
			$tagNames = array_map(fn ($tagName) => strtolower($tagName), $tagNames);
			$this->tagManager->removeTags($tagNames);
		} catch (\Exception $ex) {
			$output->writeln('<error>Failed to remove old legacy tags</error>');
			$output->writeln($ex->getMessage());
			return 1;
		}

		return 0;
	}
}
