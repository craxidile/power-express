import { LocalizedText } from '../_commons/localized';

export interface Benefit {
  id: number;
  seq: number;
  icon: string;
  title: LocalizedText;
  excerpt: LocalizedText;
}
