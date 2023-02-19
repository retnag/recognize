OC.L10N.register(
    "recognize",
    {
    "Recognize" : "Gjenkjenn",
    "Smart media tagging for Nextcloud" : "Smart mediamerking for Nextcloud",
    "This app goes through your media collection and adds fitting tags, automatically categorizing your photos and music.\n\n* 📷 👪 Recognizes faces from contact photos\n* 📷 🏔 Recognizes animals, landscapes, food, vehicles, buildings and other objects\n* 📷 🗼 Recognizes landmarks and monuments\n* 👂 🎵 Recognizes music genres\n* ⚡ Tagging works via Nextcloud's Collaborative Tags, allowing access by any of your apps\n  * 👂 listen to your tagged music with the audioplayer app\n  * 📷 view your tagged photos with the photos app\n\nAfter installation, you can enable tagging in the admin settings.\n\nRequirements:\n- PHP 7.4 and above\n- App \"collaborative tags\" enabled\n- For native speed:\n  - Processor: x86 64-bit (with support for AVX instructions)\n  - System with glibc (usually the norm on Linux; Alpine linux and FreeBSD are *not* such systems)\n- For sub-native speed (using JavaScript mode)\n  - Processor: x86 64-bit, arm64, armv7l (no AVX needed)\n  - System with glibc or musl (incl. Alpine linux)\n- ~4GB of free RAM (if you're cutting it close, make sure you have some swap available)\n\nThe app does not send any sensitive data to cloud providers or similar services. All processing is done on your Nextcloud machine, using Tensorflow.js running in Node.js." : "Denne appen går gjennom mediesamlingen din og legger til passende tagger, og kategoriserer bildene og musikken dine automatisk.\n\n* 📷 👪 Gjenkjenner ansikter fra kontaktbilder\n* 📷 🏔 Gjenkjenner dyr, landskap, mat, kjøretøy, bygninger og andre objekter\n* 📷 🗼 gjenkjenner landemerker og monumenter\n* 👂 🎵 Gjenkjenner musikksjangre\n* ⚡ Tagging fungerer via Nextclouds Collaborative Tags, og gir tilgang for alle appene dine\n* 👂 lytt til den merkede musikken din med audioplayer-appen\n* 📷 se de merkede bildene dine med bildeappen\n\nEtter installasjonen kan du aktivere tagging i admin-innstillingene.\n\nKrav:\n- PHP 7.4 og nyere\n- App \"Collaborative tags\" aktivert\n- For god hastighet:\n- Prosessor: x86 64-bit (med støtte for AVX-instruksjoner)\n- System med glibc (vanligvis normen på Linux; Alpine linux og FreeBSD er *ikke* slike systemer)\n- For sub-native hastighet (bruker JavaScript-modus)\n- Prosessor: x86 64-bit, arm64, armv7l (ingen AVX nødvendig)\n- System med glibc eller musl (inkl. Alpine linux)\n- ~ 4 GB ledig RAM (om du er nær grensen, sør for at du har noe swap tilgjengelig)\n\nAppen sender ingen sensitive data til skyleverandører eller lignende tjenester. All behandling gjøres på din Nextcloud-maskin, ved å bruke Tensorflow.js som kjører i Node.js.",
    "Status" : "Status",
    "The machine learning models have been downloaded successfully." : "Maskinlæringsmodellene er lastet ned.",
    "The machine learning models still need to be downloaded." : "Maskinlæringsmodellene må fortsatt lastes ned.",
    "Could not execute the Node.js binary. You may need to set the path to a working binary manually." : "Kunne ikke kjøre Node.js-binærfilen. Du må kanskje angi banen til en fungerende binærfil manuelt.",
    "Background Jobs are not executed via cron. Recognize requires background jobs to be executed via cron." : "Bakgrunnsjobber utføres ikke via cron. Gjennkjenn krever at bakgrunnsjobber utføres via cron.",
    "The app is installed and will automatically classify files in background processes." : "Appen er installert og vil automatisk klassifisere filer i bakgrunnsprosesser.",
    "None of the tagging options below are currently selected. The app will currently do nothing." : "Ingen av merkingsalternativene nedenfor er valgt for øyeblikket. Appen vil for øyeblikket ikke gjøre noe.",
    "Image tagging" : "Bildemerking",
    "Face recognition is working. " : "Ansiktsgjenkjenning fungerer.",
    "An error occurred during face recognition, please check the Nextcloud logs." : "Det oppstod en feil under ansiktsgjenkjenning, vennligst sjekk Nextcloud-loggene.",
    "Waiting for status reports on face recognition. If this message persists beyond 15 minutes, please check the Nextcloud logs." : "Venter på statusrapporter om ansiktsgjenkjenning. Hvis denne meldingen vedvarer i mer enn 15 minutter, vennligst sjekk Nextcloud-loggene.",
    "Face recognition:" : "Ansiktsgjenkjenning:",
    "Queued files" : "Filer i kø",
    "Last classification: " : "Siste klassifisering:",
    "Object recognition is working." : "Objektgjenkjenning fungerer.",
    "An error occurred during object recognition, please check the Nextcloud logs." : "Det oppstod en feil under gjenkjenning av objekter, vennligst sjekk Nextcloud-loggene.",
    "Waiting for status reports on object recognition. If this message persists beyond 15 minutes, please check the Nextcloud logs." : "Venter på statusrapporter om objektgjenkjenning. Hvis denne meldingen vedvarer i mer enn 15 minutter, vennligst sjekk Nextcloud-loggene.",
    "Object recognition:" : "Objektgjenkjenning:",
    "Enable face recognition (groups pictures by people that appear in them in the photos app)" : "Aktiver ansiktsgjenkjenning (grupperer bilder etter personer som vises i dem i Bilder-appen)",
    "The number of files to process per job run (A job will be scheduled every 5 minutes; For normal operation ~500 or more, in WASM mode ~50 is recommended)" : "Antall filer som skal behandles per jobbkjøring (En jobb vil bli planlagt hvert 5. minutt; For normal drift ~500 eller mer, i WASM-modus anbefales ~50)",
    "Enable object recognition (e.g. food, vehicles, landscapes)" : "Aktiver gjenkjenning av objekter (f.eks. mat, kjøretøy, landskap)",
    "The number of files to process per job run (A job will be scheduled every 5 minutes; For normal operation ~100 or more, in WASM mode ~20 is recommended)" : "Antall filer som skal behandles per jobbkjøring (En jobb vil bli planlagt hvert 5. minutt; For normal drift ~100 eller mer, i WASM-modus anbefales ~20)",
    "Enable landmark recognition (e.g. Eiffel Tower, Golden Gate Bridge)" : "Aktiver landemerkegjenkjenning (f.eks. Eiffeltårnet, Golden Gate Bridge)",
    "Audio tagging" : "Lydmerking",
    "Audio recognition is working." : "Lydgjenkjenning fungerer.",
    "An error occurred during audio recognition, please check the Nextcloud logs." : "Det oppstod en feil under lydgjenkjenning, vennligst sjekk Nextcloud-loggene.",
    "Waiting for status reports on audio recognition. If this message persists beyond 15 minutes, please check the Nextcloud logs." : "Venter på statusrapporter om lydgjenkjenning. Hvis denne meldingen vedvarer i mer enn 15 minutter, vennligst sjekk Nextcloud-loggene.",
    "Music genre recognition:" : "Musikksjangergjenkjenning:",
    "Enable music genre recognition (e.g. pop, rock, folk, metal, new age)" : "Aktiver gjenkjenning av musikksjanger (f.eks. pop, rock, folk, metal, new age)",
    "Video tagging" : "Videomerking",
    "Video recognition is working." : "Videogjenkjenning fungerer.",
    "An error occurred during video recognition, please check the Nextcloud logs." : "Det oppstod en feil under videogjenkjenning, vennligst sjekk Nextcloud-loggene.",
    "Waiting for status reports on video recognition. If this message persists beyond 15 minutes, please check the Nextcloud logs." : "Venter på statusrapporter om videogjenkjenning. Hvis denne meldingen vedvarer i mer enn 15 minutter, vennligst sjekk Nextcloud-loggene.",
    "Video recognition:" : "Videogjenkjenning:",
    "Enable human action recognition (e.g. arm wrestling, dribbling basketball, hula hooping)" : "Aktiver menneskelig handlingsgjenkjenning (f.eks. armbryting, dribling av basketball, hulahopring)",
    "The number of files to process per job run (A job will be scheduled every 5 minutes; For normal operation ~20 or more, in WASM mode ~5 is recommended)" : "Antall filer som skal behandles per jobbkjøring (En jobb vil bli planlagt hvert 5. minutt; For normal drift ~20 eller mer, i WASM-modus anbefales ~5)",
    "Reset" : "Tilbakestill",
    "Click the button below to remove all tags from all files that have been classified so far." : "Klikk på knappen nedenfor for å fjerne alle tagger fra alle filer som har blitt klassifisert så langt.",
    "Reset tags for classified files" : "Tilbakestill merkelapper for klassifiserte filer",
    "Click the button below to remove all face detections from all files that have been classified so far." : "Klikk på knappen nedenfor for å fjerne alle ansiktsgjenkjenninger fra alle filer som har blitt klassifisert så langt.",
    "Reset faces for classified files" : "Tilbakestill ansikter for klassifiserte filer",
    "Click the button below to rescan all files in this instance and add them to the classifier queues." : "Klikk på knappen nedenfor for å skanne alle filene på nytt i dette tilfellet og legge dem til klassifiseringskøene.",
    "Rescan all files" : "Skann alle filene på nytt",
    "Terminal commands" : "Terminalkommandoer",
    "To trigger a full classification run manually, run the following command on the server terminal." : "For å utløse en full klassifiseringskjøring manuelt, kjør følgende kommando på serverterminalen.",
    "To download all models preliminary to executing the classification jobs, run the following command on the server terminal." : "For å laste ned alle modellene før utførelse av klassifiseringsjobbene, kjør følgende kommando på serverterminalen.",
    "You can reset the tags of all files that have been previously classified by Recognize with the following command:" : "Du kan tilbakestille merkelappene for alle filer som tidligere har blitt klassifisert av Gjennkjenn med følgende kommando:",
    "You can delete all tags that no longer have any files associated with them with the following command:" : "Du kan slette alle merkelappene som ikke lenger har noen filer knyttet til seg med følgende kommando:",
    "CPU cores" : "CPU-kjerner",
    "By default all available CPU cores will be used which may put your system under considerable load. To avoid this, you can limit the amount of CPU Cores used." : "Som standard vil alle tilgjengelige CPU-kjerner bli brukt, noe som kan sette systemet under betydelig belastning. For å unngå dette kan du begrense mengden CPU-kjerner som brukes.",
    "Number of CPU Cores (0 for no limit)" : "Antall CPU-kjerner (0 for ingen grense)",
    "Tensorflow WASM mode" : "Tensorflow WASM-modus",
    "Checking CPU" : "Sjekker CPU",
    "Could not check whether your machine supports native TensorFlow operation." : "Kunne ikke sjekke om maskinen din støtter innebygd TensorFlow.",
    "Your machine supports native TensorFlow operation, you do not need WASM mode." : "Maskinen din støtter innebygd TensorFlow, du trenger ikke WASM-modus.",
    "WASM mode was activated automatically, because your machine does not support native TensorFlow operation:" : "WASM-modus ble aktivert automatisk fordi maskinen din ikke støtter innebygd TensorFlow:",
    "Enable WASM mode" : "Aktiver WASM-modus",
    "Tensorflow GPU mode" : "Tensorflow GPU-modus",
    "Enable GPU mode" : "Aktiver GPU-modus",
    "Node.js" : "Node.js",
    "Checking Node.js" : "Sjekker Node.js",
    "Node.js {version} binary was installed successfully." : "Node.js {version} binærfil ble installert.",
    "Checking libtensorflow" : "Sjekker libtensorflow",
    "Could not load libtensorflow in Node.js. You can try to manually install libtensorflow or run in WASM mode." : "Kunne ikke laste libtensorflow i Node.js. Du kan prøve å installere libtensorflow manuelt eller kjøre i WASM-modus.",
    "Successfully loaded libtensorflow in Node.js, but couldn't load GPU. Make sure CUDA Toolkit and cuDNN are installed and accessible, or turn off GPU mode." : "Lastet libtensorflow i Node.js, men kunne ikke laste inn GPU. Sørg for at CUDA Toolkit og cuDNN er installert og tilgjengelig, eller slå av GPU-modus.",
    "Libtensorflow was loaded successfully into Node.js." : "Libtensorflow ble lastet inn i Node.js.",
    "Could not load Tensorflow WASM in Node.js. Something is wrong with your setup." : "Kunne ikke laste Tensorflow WASM i Node.js. Noe er galt med oppsettet ditt.",
    "Tensorflow WASM was loaded successfully into Node.js." : "Tensorflow WASM ble lastet inn i Node.js.",
    "If the shipped Node.js binary doesn't work on your system for some reason you can set the path to a custom node.js binary. Currently supported is Node v14.17 and newer v14 releases." : "Hvis den medfølgende Node.js-binærfilen av en eller annen grunn ikke fungerer på systemet ditt, kan du sette banen til en tilpasset node.js-binærfil. Node v14.17 og nyere v14-utgivelser støttes for øyeblikket.",
    "Your server does not support AVX instructions" : "Serveren din støtter ikke AVX-instruksjoner",
    "Your server does not have an x86 64-bit CPU" : "Serveren din har ikke en x86 64-bit CPU",
    "Your server uses musl libc" : "Serveren din bruker musl libc",
    "Failed to load settings" : "Klarte ikke å laste inn innstillinger",
    "Failed to save settings" : "Klarte ikke å lagre innstillinger",
    "never" : "aldri",
    "{time} ago" : "{time} siden",
    "Cat" : "Katt",
    "Animal" : "Dyr",
    "Wildlife" : "Dyreliv",
    "Nature" : "Natur",
    "Puma" : "Puma",
    "Leopard" : "Leopard",
    "Lion" : "Løve",
    "Wild cat" : "Villkatt",
    "Cheetah" : "Gepard",
    "Seashore" : "Kysten",
    "Beach" : "Strand",
    "Water" : "Vann",
    "Lakeside" : "Ved innsjø",
    "Flower" : "Blomst",
    "Plant" : "Plante",
    "Window" : "Vindu",
    "Architecture" : "Arkitektur",
    "Stairs" : "Trapp",
    "Building" : "Bygning",
    "Field" : "Jorde",
    "Farm" : "Gård",
    "Landscape" : "Landskap",
    "Portrait" : "Portrett",
    "People" : "Mennesker",
    "Fashion" : "Mote",
    "Ship" : "Skip",
    "Vehicle" : "Kjøretøy",
    "Grasshopper" : "Gresshoppe",
    "Insect" : "Insekt",
    "Fish" : "Fisk",
    "Shark" : "Hai",
    "Chicken" : "Kylling",
    "Bird" : "Fugl",
    "Ostrich" : "Struts",
    "Owl" : "Ugle",
    "Salamander" : "Salamander",
    "Frog" : "Frosk",
    "Turtle" : "Skilpadde",
    "Reptile" : "Reptil",
    "Lizard" : "Øgle",
    "Chameleon" : "Kameleon",
    "Crocodile" : "Krokodille",
    "Alligator" : "Alligator",
    "Scorpion" : "Skorpion",
    "Spider" : "Edderkopp",
    "Duck" : "And",
    "Worm" : "Mark",
    "Shell" : "Skall",
    "Snail" : "Snegle",
    "Crab" : "Krabbe",
    "Lobster" : "Hummer",
    "Cooking" : "Matlaging",
    "Penguin" : "Pingvin",
    "Whale" : "Hval",
    "Dog" : "Hund",
    "Wolf" : "Ulv",
    "Fox" : "Rev",
    "Bear" : "Bjørn",
    "Beetle" : "Bille",
    "Butterfly" : "Sommerfugl",
    "Rabbit" : "Kanin",
    "Hippo" : "Flodhest",
    "Cow" : "Ku",
    "Buffalo" : "Bøffel",
    "Sheep" : "Sau",
    "Ape" : "Ape",
    "Monkey" : "Ape",
    "Lemur" : "Lemur",
    "Elephant" : "Elefant",
    "Panda" : "Panda",
    "Instrument" : "Instrument",
    "Music" : "Musikk",
    "Aircraft" : "Fly",
    "Airport" : "Flyplass",
    "Tractor" : "Traktor",
    "Weapon" : "Våpen",
    "Backpack" : "Ryggsekk",
    "Shop" : "Butikk",
    "Office" : "Office",
    "Outdoor" : "Utendørs",
    "Living" : "Leve",
    "Tower" : "Tårn",
    "Drinks" : "Drinker",
    "Beverage" : "Drikke",
    "Food" : "Mat",
    "Shelter" : "Husly",
    "Furniture" : "Møbel",
    "Book" : "Bok",
    "Train" : "Tog",
    "Butcher" : "Slakter",
    "Car" : "Bil",
    "Historic" : "Historisk",
    "Boat" : "Båt",
    "Electronics" : "Elektronikk",
    "Indoor" : "Innendørs",
    "Church" : "Kirke",
    "Shoe" : "Sko",
    "Candle" : "Stearinlys",
    "Coffee" : "Kaffe",
    "Keyboard" : "Tastatur",
    "Computer" : "Datamaskin",
    "Helmet" : "Hjelm",
    "Wall" : "Vegg",
    "Clock" : "Klokke",
    "Dining" : "Servering",
    "Kitchen" : "Kjøkken",
    "Snow" : "Snø",
    "Dome" : "Kuppel",
    "Screen" : "Skjerm",
    "Flag" : "Flagg",
    "Truck" : "Lastebil",
    "Store" : "Butikk",
    "Tool" : "Verktøy",
    "Pumpkin" : "Gresskar",
    "Vegetables" : "Grønnsaker",
    "Photography" : "Fotografi",
    "Library" : "Bibliotek",
    "Display" : "Vis",
    "Bag" : "Veske",
    "Cup" : "Kopp",
    "Rocks" : "Stein",
    "Bus" : "Buss",
    "Bowl" : "Bolle",
    "Monitor" : "Monitor",
    "Bike" : "Sykkel",
    "Scooter" : "Scooter",
    "Camping" : "Camping",
    "Cart" : "Handlevogn",
    "Piggy bank" : "Sparegris",
    "Bottle" : "Flaske",
    "Plate" : "Tallerken",
    "Camera" : "Kamera",
    "Camper" : "Bobil",
    "Barbecue" : "Grill",
    "Basket" : "Kurv",
    "Diving" : "Dykking",
    "Snowmobile" : "Snøscooter",
    "Bridge" : "Bro",
    "Couch" : "Sofa",
    "Theater" : "Teater",
    "Spoon" : "Skje",
    "Comic" : "Tegneserie",
    "Soup" : "Suppe",
    "Dessert" : "Dessert",
    "Bakery" : "Bakeri",
    "Fruit" : "Frukt",
    "Pasta" : "Pasta",
    "Meat" : "Kjøtt",
    "Pizza" : "Pizza",
    "Wine" : "Vin",
    "Alpine" : "Alpint",
    "Mountains" : "Fjell",
    "Sand" : "Sand",
    "Wool" : "Ull",
    "Glass" : "Glass",
    "Moment" : "Øyeblikk",
    "Info" : "Info",
    "Document" : "Dokument",
    "Puzzle" : "Puslespill",
    "Heritage" : "Arv",
    "Safe" : "Safe",
    "Bucket" : "Bøtte",
    "Baby" : "Baby",
    "Cradle" : "Vugge",
    "Patio" : "Uteplass",
    "Mountain" : "Fjell",
    "Radio telescope" : "Radioteleskop",
    "Theme park" : "Fornøyelsespark",
    "Festival" : "Festival",
    "Event" : "Begivenhet",
    "Monument" : "Monument",
    "Balloon" : "Ballong",
    "Crib" : "Krybbe",
    "Fan" : "Vifte",
    "Gas station" : "Bensinstasjon",
    "Wood" : "Trevirke",
    "Bench" : "Benk",
    "Parking" : "Parkering",
    "Traffic" : "Trafikk",
    "Public transport" : "Offentlig transport",
    "Umbrella" : "Paraply",
    "Stage" : "Scene",
    "Toy" : "Leketøy",
    "Vase" : "Vase",
    "Mailbox" : "Postkasse",
    "Sign" : "Skilt",
    "Gallery" : "Galleri",
    "Park" : "Park"
},
"nplurals=2; plural=(n != 1);");
