import { LocalizedText } from '../_commons/localized';

export interface Contact {
  id: number;
  type: string;
  icon: string;
  text: LocalizedText;
  url: string | null;
}
