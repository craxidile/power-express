import { LocalizedText } from '../_commons/localized';

export interface HeroBanner {
  id: number;
  title: LocalizedText;
  subtitle: LocalizedText;
  excerpt: LocalizedText;
  icon: string;
  banner: string;
}
