import { atom, useAtom } from 'jotai';

import { Menu } from '../../models/menu';
import {useCallback} from "react";
import {findMenu} from "../../apis/menu";

const localeState = atom<'th' | 'en'>('th');
const navMenuState = atom<Menu | null>(null);
const footerMenuState = atom<Menu | null>(null);
const socialMenuState = atom<Menu | null>(null);

export interface IVmScreen {
  locale?: ('th' | 'en');
  navMenu?: Menu | null;
  footerMenu?: Menu | null;
  socialMenu?: Menu | null;
  bind?: () => void;
}

const store: IVmScreen = {};

export const useVmScreen = (): IVmScreen => {
  const [locale, setLocale] = useAtom(localeState);
  const [navMenu, setNavMenu] = useAtom(navMenuState);
  const [footerMenu, setFooterMenu] = useAtom(footerMenuState);
  const [socialMenu, setSocialMenu] = useAtom(socialMenuState);

  const bind = useCallback(() => {
    (async () => {
      await Promise.all([
        new Promise(async (resolve, reject) => {
          try {
            const navMenu = await findMenu('nav');
            setNavMenu(navMenu);
            resolve(navMenu);
          } catch (error) {
            console.log('>>error<<', 'nav_menu', error);
            reject(error);
          }
        }),
        new Promise(async (resolve, reject) => {
          try {
            const footerMenu = await findMenu('footer');
            setFooterMenu(footerMenu);
            resolve(footerMenu);
          } catch (error) {
            console.log('>>error<<', 'footer_menu', error);
            reject(error);
          }
        }),
      ]);
    })();
  }, [setNavMenu]);


  // Observables
  store.locale = locale;
  store.navMenu = navMenu;
  store.footerMenu = footerMenu;
  store.socialMenu = socialMenu;

  // Actions
  store.bind = bind;

  return store;
};

