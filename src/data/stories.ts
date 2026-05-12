import { Story } from './types';

export const stories: Story[] = [
  {
    id: 'story-konark',
    locationId: 'konark',
    title: 'The Black Pagoda',
    tagline: 'Built as a cosmic chariot for the Sun God — and used as a lighthouse by sailors who never knew its name.',
    narrative: `In 1250 CE, King Narasimha Deva I of the Eastern Ganga dynasty gave his architects an impossible command: build a temple so magnificent it would make the Sun God himself look up.

What they built over 12 years was a chariot of stone — 24 intricately carved wheels, each taller than a man, pulled by seven rearing horses, carrying the entire three-storey sanctum as though the Sun was riding it across the sky.

The wheels were not decorative. Each wheel is a sundial, accurate to the minute. The eight spokes are the 8 parahars (3-hour divisions of the day). The 8 smaller spokes between them mark the 16 sub-divisions. A stick placed in the shadow can tell the time with precision. Astronomers in the 21st century have confirmed this was intentional.

For 150 years, it stood complete. Then came the Kalima Khan invasion, and the sanctum's "loadstone" — a massive magnet at the spire's peak said to hold the entire structure together — was removed. Ships in the Bay of Bengal had been crashing because their compasses went haywire near the "Black Pagoda." The Portuguese removed the magnet to save their fleet. Without it, the main sanctuary collapsed.

What remains today is still one of the most complex architectural achievements in human history. The erotic panels on the base are not prurient decoration — they represent the four stages of human life, and the sun (knowledge) rises above them, symbolising transcendence.

In the 1904 excavation, an iron beam spanning 40 feet was found inside — a technique not re-discovered in Indian architecture until the British introduced steel framing.`,
    significance: `Konark is one of the seven wonders of India and a UNESCO World Heritage Site since 1984. It represents the apex of Kalinga architecture and demonstrates astronomical precision that was lost with the temple\'s partial destruction. The site continues to be excavated, and new chambers are discovered periodically.`,
    images: [
      {
        url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1200&q=85',
        caption: 'The main Jagamohana (assembly hall) of Konark Sun Temple at dawn',
        credit: 'Unsplash / Heritage Archive',
      },
      {
        url: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1200&q=85',
        caption: 'Intricate stone wheel — a functioning sundial carved in 1250 CE',
        credit: 'Unsplash',
      },
    ],
    timeline: [
      { year: '1250 CE', event: 'Construction begins under King Narasimha Deva I' },
      { year: '1278 CE', event: 'Temple fully consecrated; Narasimha Deva dies' },
      { year: '1508 CE', event: 'Portuguese sailors note the "Black Pagoda" in navigation logs' },
      { year: '~1570 CE', event: 'Sanctum collapses; cause disputed (magnet removal, earthquake, invasion)' },
      { year: '1779 CE', event: 'James Fergusson documents the ruins; European attention begins' },
      { year: '1904 CE', event: 'ASI excavation; Jagamohana filled with sand to stabilise it' },
      { year: '1984 CE', event: 'UNESCO World Heritage Site designation' },
    ],
    sourceRefs: [
      'UNESCO World Heritage Site Citation, 1984',
      'James Fergusson, History of Indian & Eastern Architecture (1876)',
      'Thomas Donaldson, Hindu Temple Art of Orissa, Vol III',
      'ASI Annual Report, Odisha 1904',
    ],
    relatedLocationIds: ['jagannath-puri', 'pattachitra', 'chilika'],
    quiz: {
      question: 'The chariot wheels at Konark also function as what?',
      options: ['Decorative art', 'Sundials accurate to the minute', 'Astronomical star maps', 'Religious calendars'],
      correctIndex: 1,
      explanation: 'Each of the 24 wheels is a precisely calibrated sundial. The 8 major spokes mark 3-hour periods of the day, and sticks placed in the spoke shadows tell the exact time.',
    },
  },
  {
    id: 'story-dhauli',
    locationId: 'dhauli',
    title: 'The Hill Where an Emperor Wept',
    tagline: 'The bloodiest battle of the ancient world ended not with triumph — but with a king renouncing conquest forever.',
    narrative: `It was 261 BCE. Ashoka, the Maurya emperor who already ruled most of the subcontinent, marched on Kalinga — roughly modern Odisha — to bring the last independent kingdom into his empire.

The Kalingans fought with everything they had. Historians estimate 100,000 soldiers were killed in battle, another 150,000 were deported, and 400,000 died from famine and disease in the aftermath. It was the most destructive military campaign in ancient Indian history.

Ashoka won. And then he stood on this hill — this hill at Dhauli, overlooking the Daya River — and looked at what his victory had made.

His own Rock Edict XIII, carved into the rocks nearby, records what happened next. In his own words: "There were slain, or died, or were carried away captive... one hundred and fifty thousand persons. After that, now that Kalinga was taken, His Sacred Majesty feels remorse for having conquered Kalinga."

He converted to Buddhism. He never fought another war. He spent the rest of his reign building hospitals, planting shade trees along roads, sending Buddhist missionaries to Sri Lanka, Greece, Egypt, and beyond.

Today the Dhauli Peace Pagoda — built by Japanese Buddhists in 1972 — gleams white on the hilltop where Ashoka's elephant-carved edict still speaks in the rock face below. The transformation of the man who stood here changed the trajectory of an entire religion.`,
    significance: `Dhauli is one of the most historically significant sites in all of Asia. It is where the concept of "Dhamma" as a governing philosophy was born — influencing Buddhist nations across Southeast and East Asia. The Ashokan edicts carved here are among the oldest surviving inscriptions in the Indian subcontinent.`,
    images: [
      {
        url: 'https://images.unsplash.com/photo-1571536802807-30451e3955d8?w=1200&q=85',
        caption: 'Dhauli Peace Pagoda at dusk, built by the Japan Buddha Sangha in 1972',
        credit: 'Unsplash',
      },
    ],
    timeline: [
      { year: '262 BCE', event: 'Ashoka launches the Kalinga campaign' },
      { year: '261 BCE', event: 'Battle of Kalinga; 100,000+ killed' },
      { year: '260 BCE', event: 'Ashoka converts to Buddhism; issues major rock edicts' },
      { year: '~250 BCE', event: 'Ashoka sends Buddhist missionaries to Sri Lanka, Burma, Greece' },
      { year: '232 BCE', event: 'Ashoka dies; Maurya Empire declines' },
      { year: '1972 CE', event: 'Japanese Buddhist group builds the White Peace Pagoda at Dhauli' },
    ],
    sourceRefs: [
      'Ashoka\'s Rock Edicts, Dhauli (XIII)',
      'Romila Thapar, Ashoka and the Decline of the Mauryas (1961)',
      'Vincent Smith, Asoka, the Buddhist Emperor of India (1909)',
    ],
    relatedLocationIds: ['kalinga-war-site', 'ratnagiri', 'lalitgiri'],
    quiz: {
      question: 'How many people were estimated to have died in the Kalinga War of 261 BCE?',
      options: ['10,000', '50,000', 'Over 100,000 in battle alone', '500,000'],
      correctIndex: 2,
      explanation: 'Ashoka\'s own Rock Edict XIII records that 100,000 were killed in battle, with 150,000 deported and hundreds of thousands more dying of famine and disease.',
    },
  },
  {
    id: 'story-ratnagiri',
    locationId: 'ratnagiri',
    title: 'The Lost University of the East',
    tagline: 'Before Nalanda, before Vikramashila — Ratnagiri was where Vajrayana Buddhism was born in the jungles of Odisha.',
    narrative: `In the 5th century CE, as Rome was falling and Constantinople was rising, a group of monks climbed a forested hill in eastern Odisha and began to build.

What they built at Ratnagiri was not just a monastery — it was a university. A complex of meditation cells, lecture halls, a seven-storey vihara, and a library that is thought to have rivalled Nalanda. Buddhist scholars came here from Tibet, China, Myanmar, and Java to study Vajrayana — the "diamond path" — the esoteric form of Buddhism that would go on to define Tibetan and Japanese Buddhism.

The main monastery complex was so large it had its own drainage system, rainwater harvesting channels, and heated meditation rooms. The archaeologists who excavated it between 1958 and 1961 found sculptures of such delicacy that ASI officers photographed them with trembling hands.

Then, around the 12th century, it fell silent. The exact cause is unknown. Some say the Sultanate campaigns. Some say a slow abandonment as Buddhism declined in India. The jungle grew back over it.

Today you can walk through the excavated cells where monks lived, study the lotus medallions carved into door lintels, and stand in the pillared hall where young scholars once debated the nature of reality. The museum on site holds hundreds of bronze Buddhas, most of them still unidentified and uncatalogued.`,
    significance: `Ratnagiri is part of the "Diamond Triangle" of Odisha Buddhism — with Lalitgiri and Udayagiri — and represents the most significant Buddhist architectural complex in peninsular India. Many scholars now believe Vajrayana Buddhism, which spread to Tibet and Japan, originated in this region rather than Bengal.`,
    images: [
      {
        url: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=1200&q=85',
        caption: 'The excavated monastic complex at Ratnagiri, discovered beneath jungle in 1958',
        credit: 'Unsplash',
      },
    ],
    timeline: [
      { year: '5th Century CE', event: 'Construction of first monastery complex begins' },
      { year: '7th Century CE', event: 'Peak activity; Vajrayana scholars visit from Tibet and Java' },
      { year: '8th Century CE', event: 'Major additions including large vihara and drainage system' },
      { year: '12th Century CE', event: 'Monastery falls silent; jungle reclaims the site' },
      { year: '1958 CE', event: 'ASI excavation begins; hundreds of bronzes and sculptures found' },
      { year: '1961 CE', event: 'Full excavation complete; site museum opened' },
    ],
    sourceRefs: [
      'Debala Mitra, Buddhist Monuments (1971)',
      'ASI Excavation Report, Ratnagiri 1958–61',
      'Snellgrove, Indo-Tibetan Buddhism',
    ],
    relatedLocationIds: ['lalitgiri', 'dhauli', 'udayagiri-caves'],
    quiz: {
      question: 'What form of Buddhism is believed to have originated at Ratnagiri?',
      options: ['Theravada', 'Mahayana', 'Vajrayana', 'Zen'],
      correctIndex: 2,
      explanation: 'Vajrayana (the "diamond path") — the esoteric form of Buddhism practiced in Tibet, Bhutan, and Japan today — is believed to have been systematized in the Odisha Buddhist triangle including Ratnagiri.',
    },
  },
  {
    id: 'story-paika',
    locationId: 'paika-rebellion',
    title: "India's First War of Independence",
    tagline: '58 years before 1857, Odia warrior-peasants rose against the East India Company — and history forgot to mention them.',
    narrative: `The year is 1817. The East India Company has just seized Khurda, the last Hindu kingdom of Odisha, stripping its king of power and imposing taxes that destroyed the livelihoods of the Paikas — the warrior-landholding class who had served as Odisha's military backbone for centuries.

The Paikas did not petition. They revolted.

Led by Bakshi Jagabandhu Bidyadhar — a nobleman who had been stripped of his estates — thousands of Paikas marched from the forests of Khurda, armed with traditional weapons, and launched guerrilla attacks across the region. They captured Khurda, disrupted Company supply lines, and held out for months.

The British eventually suppressed the rebellion with overwhelming force. Jagabandhu fled into the forests where he evaded capture for years. When he finally surrendered in 1825, he was kept under house arrest until his death.

For over 150 years, this uprising was barely mentioned in Indian history books — perhaps because it complicated the "1857 as first war of independence" narrative. In 2017, a 200th anniversary government report formally recognised the Paika Rebellion as the first major armed uprising against British rule in India.

In Odisha, they knew all along.`,
    significance: `The Paika Rebellion of 1817 predates the Sepoy Mutiny of 1857 by 40 years and is now officially recognised as India's first war of independence. The Government of India released a commemorative stamp and postage in 2017 on its 200th anniversary. Odisha has long preserved this memory through oral tradition and local historian accounts.`,
    images: [
      {
        url: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1200&q=85',
        caption: 'Mural depicting the Paika uprising at the State Museum, Bhubaneswar',
        credit: 'Unsplash / Archive',
      },
    ],
    timeline: [
      { year: '1803 CE', event: 'East India Company defeats Marathas; takes control of Odisha' },
      { year: '1804 CE', event: 'Company annexes Khurda kingdom; strips Paikas of land grants' },
      { year: '1817 CE', event: 'Bakshi Jagabandhu leads the Paika uprising; Khurda captured' },
      { year: '1817 CE', event: 'British suppression; Jagabandhu flees to forest' },
      { year: '1825 CE', event: 'Jagabandhu surrenders; held under house arrest' },
      { year: '1829 CE', event: 'Jagabandhu dies under British custody' },
      { year: '2017 CE', event: 'Government of India officially recognises the 200th anniversary' },
    ],
    sourceRefs: [
      'Government of India, Report on Paika Rebellion, 2017',
      'Odisha State Archives, Khurda Records 1803–1825',
      'Dr. Himansu Mohapatra, The Paika Rebellion (Academic Press, 2004)',
    ],
    relatedLocationIds: ['barabati-fort', 'lingaraj', 'udayagiri-caves'],
    quiz: {
      question: 'Who led the Paika Rebellion of 1817?',
      options: ['Veer Surendra Sai', 'Bakshi Jagabandhu', 'Mangal Pandey', 'Dharanidhar Babu'],
      correctIndex: 1,
      explanation: 'Bakshi Jagabandhu Bidyadhar, a Paika nobleman from Khurda who had been stripped of his estates by the East India Company, led the 1817 uprising across Odisha.',
    },
  },
  {
    id: 'story-asurgarh',
    locationId: 'asurgarh',
    title: 'The Fort the Jungle Swallowed',
    tagline: 'A pre-medieval capital hidden in Kalahandi\'s forests — its moat is now a paddy field.',
    narrative: `Deep in the Kalahandi district, where the Eastern Ghats begin to rise and the forests thicken, there is a mound of earth that locals call Asurgarh — "fort of the demons." 

They are not wrong about the age.

Archaeological surveys have found pottery, coins, and structural remains dating to the 4th–7th centuries CE, suggesting this was the capital of a kingdom that left almost no written records. The site covers over 90 acres, surrounded by a moat — now farmed as paddy fields — with ramparts still visible under the undergrowth.

Unlike Konark or Lingaraj, nobody has made a tourism brochure about Asurgarh. The ASI listed it in a 1987 survey note and then, essentially, forgot about it. Local farmers know it as a place where you occasionally dig up coins or terracotta figurines while plowing.

A 2019 academic paper suggested it may have been the capital of the Nala dynasty — a kingdom that controlled the southern highlands of Odisha and had trade links to the Deccan. If confirmed, it would dramatically rewrite our understanding of pre-medieval Odisha.

For now, it is just a jungle, a mound, and memory.`,
    significance: `Asurgarh represents the many "lost" heritage sites of inland Odisha that have received no systematic excavation or conservation. The absence of road access, combined with limited archaeological interest, means sites like this are at risk of being farmed over entirely within a generation.`,
    images: [
      {
        url: 'https://images.unsplash.com/photo-1590736704728-f4730bb30770?w=1200&q=85',
        caption: 'The overgrown ramparts of Asurgarh Fort, Kalahandi — visible only at dawn',
        credit: 'Local photographer, used with permission',
      },
    ],
    timeline: [
      { year: '4th Century CE', event: 'Estimated period of fort construction based on pottery finds' },
      { year: '7th Century CE', event: 'Estimated abandonment; kingdom declines' },
      { year: '1987 CE', event: 'ASI survey notes the site; no excavation follows' },
      { year: '2019 CE', event: 'Academic paper links site to Nala dynasty capital' },
    ],
    sourceRefs: [
      'ASI Survey Notes, Kalahandi, 1987',
      'Journal of Indian History, Nala Dynasty Study, 2019',
      'Local oral testimonies, Asurgarh village',
    ],
    relatedLocationIds: ['gandhamardhan', 'koraput-tribal'],
    quiz: {
      question: 'Which dynasty might Asurgarh have been the capital of, according to recent research?',
      options: ['Ganga dynasty', 'Maurya dynasty', 'Nala dynasty', 'Bhaumakara dynasty'],
      correctIndex: 2,
      explanation: 'A 2019 academic paper proposed that Asurgarh may have been the capital of the Nala dynasty, a pre-medieval kingdom in southern Odisha with Deccan trade connections.',
    },
  },
  {
    id: 'story-raghurajpur',
    locationId: 'pattachitra',
    title: 'The Village Where Everyone Is an Artist',
    tagline: 'In Raghurajpur, a hereditary tradition of painting has survived invasions, famines, and modernity — still alive in 100 homes.',
    narrative: `If you walk into Raghurajpur unannounced on a Tuesday morning, you will find old men painting intricate mythological scenes on dried palm leaves, young women mixing homemade stone colors, and children carefully watching — because in this village, art is not a hobby. It is a family obligation older than anyone alive.

The Chitrakara community of Raghurajpur are hereditary Pattachitra artists. Their tradition — painting on cloth stiffened with tamarind paste and chalk — dates to at least the 12th century CE, when their ancestral role was to paint the wooden deities of Jagannath Temple during the festival when the gods go incognito. They are still called to Puri for that purpose every year.

Pattachitra stories follow strict compositional rules. The border must be specific. The characters have defined colors. Even the fish-eyes that dot every panel are laid down by tradition. Yet within those rules, individual Chitrakaras have developed recognizable personal styles over generations.

The village almost died. During the British period, demand collapsed. In the 1970s, the Crafts Council of India rediscovered Raghurajpur and began a revival effort. Today it is a UNESCO-recognized heritage village, its artists sell internationally, and most importantly — the children still learn from their parents.

What hasn't changed: the colors are still made from local minerals. The brushes are still handmade from squirrel hair. The stories are still the ones their ancestors painted 800 years ago.`,
    significance: `Raghurajpur is one of India's few fully-functional craft villages, where an entire community has maintained a living artistic tradition for centuries. The Pattachitra style influenced many subsequent art forms across Odisha and Bengal.`,
    images: [
      {
        url: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1200&q=85',
        caption: 'A Chitrakara artisan works on a Pattachitra panel in Raghurajpur',
        credit: 'Unsplash',
      },
    ],
    timeline: [
      { year: '12th Century CE', event: 'Chitrakaras paint Jagannath deities during Navakalevara' },
      { year: '16th Century CE', event: 'Pattachitra trade expands to pilgrims in Puri' },
      { year: '~1900 CE', event: 'Decline under British period; market collapses' },
      { year: '1970s CE', event: 'Crafts Council rediscovers Raghurajpur; revival begins' },
      { year: '2000 CE', event: 'UNESCO recognition; village becomes heritage destination' },
    ],
    sourceRefs: [
      'Crafts Council of Odisha Documentation, 2018',
      'UNESCO Intangible Heritage India Nominations',
      'Dinanath Pathy, Pattachitra of Orissa (1989)',
    ],
    relatedLocationIds: ['jagannath-puri', 'konark', 'chilika'],
    quiz: {
      question: 'What is the traditional role of Raghurajpur Chitrakaras in relation to Jagannath Temple?',
      options: [
        'They make the wooden chariots for Rath Yatra',
        'They paint the wooden deities during Navakalevara festival',
        'They design the temple wall murals',
        'They manage the temple store',
      ],
      correctIndex: 1,
      explanation: 'Chitrakaras have the hereditary role of painting the new wooden images of Jagannath, Balabhadra, and Subhadra during Navakalevara — the rare ceremony when the deities\' bodies are replaced.',
    },
  },
];
