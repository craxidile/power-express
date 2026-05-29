import { LocalizedText } from '../_commons/localized';

export interface ActivityTag {
  id: number;
  color: string;
  title: LocalizedText;
}

export interface ActivityType {
  id: number;
  color: string;
  title: LocalizedText;
}

export interface Activity {
  id: number;
  thumbnail: string;
  banner: string;
  tag?: ActivityTag | null;
  type?: ActivityType | null;
  publishedAt?: string;
  title: LocalizedText;
  excerpt?: LocalizedText;
  details?: LocalizedText;
  nextActivityId: number | null;
}
