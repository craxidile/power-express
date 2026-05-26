import { LocalizedText } from '../_commons/localized';

export interface Project {
  id: number;
  thumbnail: string;
  banner: string;
  title: LocalizedText;
  excerpt: LocalizedText;
  details: LocalizedText;
  client: LocalizedText;
  location: LocalizedText;
  capacity: number;
  completion: number;
  energy: number;
  treesPlanted?: number;
  photos: string[];
  nextProjectId: number | null;
}
