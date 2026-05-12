export type Category =
  | 'temple'
  | 'buddhist'
  | 'fort'
  | 'battle'
  | 'cultural'
  | 'festival'
  | 'tribal'
  | 'maritime'
  | 'hidden';

export type ConfidenceLevel = 'verified' | 'community' | 'legend';

export type ContentTier = 'A' | 'B';

export interface Location {
  id: string;
  name: string;
  lat: number;
  lng: number;
  category: Category;
  district: string;
  era: string;
  teaser: string;
  image: string;
  trailIds: string[];
  confidenceLevel: ConfidenceLevel;
  tier: ContentTier;
  sourceRefs: string[];
  languageAvailability: ('en' | 'hi' | 'od')[];
  isHiddenGem: boolean;
  storyId?: string;
  tags?: string[];
}

export interface TimelineEntry {
  year: string;
  event: string;
}

export interface Story {
  id: string;
  locationId: string;
  title: string;
  tagline: string;
  narrative: string;
  significance: string;
  images: { url: string; caption: string; credit: string }[];
  timeline: TimelineEntry[];
  sourceRefs: string[];
  relatedLocationIds: string[];
  quiz?: QuizQuestion;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface Trail {
  id: string;
  name: string;
  description: string;
  region: string;
  locationIds: string[];
  image: string;
  durationDays: number;
  highlights: string[];
  color: string;
}

export interface Video {
  id: string;
  title: string;
  description: string;
  youtubeId: string;
  thumbnail: string;
  locationId?: string;
  category: Category;
  duration: string;
  source: string;
  tags: string[];
}

export interface Contribution {
  id?: string;
  locationName: string;
  district: string;
  category: Category;
  language: 'en' | 'hi' | 'od';
  description: string;
  sourceContext: string;
  mediaUrl?: string;
  status: 'pending' | 'reviewed' | 'approved' | 'rejected';
  submittedAt: string;
  disclaimer: string;
}
