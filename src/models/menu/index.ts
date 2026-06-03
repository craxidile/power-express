import { LocalizedText } from '../_commons/localized';

export interface MenuItem {
  id: number;
  icon?: string;
  title: string;
  url: string;
  isCta?: boolean;
}

export interface Menu {
  id: number;
  type: string;
  items: MenuItem[];
}
