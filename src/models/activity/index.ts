import { LocalizedText } from '../_commons/localized';

export interface ActivityTag {
  id: string;
  color: string;
  title: LocalizedText;
}

export interface ActivityType {
  id: string;
  color: string;
  title: LocalizedText;
}

export interface Activity {
  id: number;
  thumbnail: string;
  banner: string;
  tag?: ActivityTag;
  type?: ActivityType;
  publishedAt?: string;
  title: LocalizedText;
  excerpt?: LocalizedText;
  details?: LocalizedText;
  nextActivityId: number | null;
}
