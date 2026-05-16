import {Menu} from "../../models/menu";

import mockNavMenu from './mock/nav-menu';
import mockFooterMenu from './mock/footer-menu';

export const findMenu = async (type: string): Promise<Menu | null> => {
  if (type === 'nav') return mockNavMenu;
  if (type === 'footer') return mockFooterMenu;
  return null;
};
