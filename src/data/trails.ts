import { Trail } from './types';

export const trails: Trail[] = [
  {
    id: 'bhubaneswar-temple-trail',
    name: 'Bhubaneswar Temple Trail',
    description:
      'Bhubaneswar was once called the "City of Temples" — with over 500 temples at its peak. This trail visits the finest surviving examples of Kalinga architecture, from the soaring Lingaraj to the intimate gem of Mukteshwar, plus the ancient Jain caves where monks carved philosophy into rock.',
    region: 'Bhubaneswar, Khordha District',
    locationIds: ['lingaraj', 'mukteshwar', 'rajarani', 'udayagiri-caves', 'toshali', 'paika-rebellion'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    durationDays: 2,
    highlights: ['Lingaraj Temple at dawn', 'Mukteshwar torana gateway', 'Khandagiri cave inscriptions', 'Toshali — the lost Ashokan capital'],
    color: '#e8a045',
  },
  {
    id: 'puri-konark-trail',
    name: 'Puri–Konark Coastal Trail',
    description:
      'The golden triangle of Odisha\'s coast. Jagannath\'s living temple in Puri, the Black Pagoda of Konark, the artists of Raghurajpur, the maritime memory of Chilika — this trail is where Odisha\'s soul meets the sea.',
    region: 'Puri District, Konark',
    locationIds: ['jagannath-puri', 'konark', 'chilika', 'rath-yatra', 'pattachitra', 'gopalpur'],
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&q=80',
    durationDays: 3,
    highlights: ['Konark Sun Temple at sunrise', 'Rath Yatra in Puri', 'Pattachitra artists in Raghurajpur', 'Chilika Lake at dusk'],
    color: '#c84b4b',
  },
  {
    id: 'buddhist-diamond-triangle',
    name: 'Buddhist Diamond Triangle',
    description:
      'Three hilltop monastery complexes — Ratnagiri, Lalitgiri, Udayagiri — form an ancient triangle of Vajrayana Buddhism. These were among the greatest seats of learning before they fell silent. And at Dhauli, the bloodiest war in ancient history gave birth to Buddhism\'s greatest patron.',
    region: 'Jajpur, Cuttack, Khordha',
    locationIds: ['ratnagiri', 'lalitgiri', 'dhauli', 'kalinga-war-site'],
    image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&q=80',
    durationDays: 2,
    highlights: ['Ratnagiri monastery complex', 'Ashoka\'s Rock Edicts at Dhauli', 'Lalitgiri stupa excavations', 'Buddhist sculpture gallery'],
    color: '#7c6cd4',
  },
  {
    id: 'cuttack-river-trail',
    name: 'Cuttack River & Trade Trail',
    description:
      'The millennium-old capital of Odisha sits at the confluence of the Mahanadi and Kathajodi rivers. Barabati Fort\'s ghost towers over a city of silver craftsmen whose filigree work has been traded across the world for five centuries.',
    region: 'Cuttack District',
    locationIds: ['barabati-fort', 'silver-filigree', 'lalitgiri'],
    image: 'https://images.unsplash.com/photo-1583420978-de0dae0e1da9?w=800&q=80',
    durationDays: 1,
    highlights: ['Barabati Fort moat walk', 'Silver filigree workshop visit', 'Mahanadi river heritage walk'],
    color: '#4a9b8e',
  },
  {
    id: 'western-odisha-folk-trail',
    name: 'Western Odisha Folk & Tribal Trail',
    description:
      'Odisha\'s western highlands are home to India\'s most diverse tribal cultures. The Bonda, Kondh, and Mankidia peoples have lived here since prehistory. Bargarh\'s Dhanu Yatra turns an entire district into a stage. And hidden in the jungles, forgotten forts tell stories no textbook covers.',
    region: 'Bargarh, Kalahandi, Koraput, Sambalpur',
    locationIds: ['gandhamardhan', 'asurgarh', 'koraput-tribal', 'dhanu-yatra', 'sambalpur-hirakud', 'simlipal'],
    image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=800&q=80',
    durationDays: 4,
    highlights: ['Dhanu Yatra at Bargarh', 'Koraput tribal haat market', 'Gandhamardhan medicinal forest', 'Asurgarh jungle fort'],
    color: '#6b8e4e',
  },
];
