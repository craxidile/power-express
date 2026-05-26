import { useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { atom, useAtom } from 'jotai';

import { Menu } from '../../models/menu';
import { LocalizedKeyText } from '../../models/_commons/localized';
import { findMenu } from '../../apis/menu';
import { listLocalizations } from '../../apis/localization';

const localeState = atom<'th' | 'en'>('th');
const navMenuState = atom<Menu | null>(null);
const footerMenuState = atom<Menu | null>(null);
const socialMenuState = atom<Menu | null>(null);
const popupVisibleState = atom<boolean>(false);
const localizationsState = atom<LocalizedKeyText[]>([]);

export interface IVmScreen {
  // Observables
  locale?: 'th' | 'en';
  localizations?: LocalizedKeyText[];
  navMenu?: Menu | null;
  footerMenu?: Menu | null;
  socialMenu?: Menu | null;
  popupVisible?: boolean;
  // Actions
  bind?: () => void;
  setPopupVisible?: (visible: boolean) => void;
}

const store: IVmScreen = {};

export const useVmScreen = (): IVmScreen => {
  const { locale: localeParam } = useParams();

  const [locale, setLocale] = useAtom(localeState);
  const [localizations, setLocalizations] = useAtom(localizationsState);
  const [navMenu, setNavMenu] = useAtom(navMenuState);
  const [footerMenu, setFooterMenu] = useAtom(footerMenuState);
  const [socialMenu, setSocialMenu] = useAtom(socialMenuState);
  const [popupVisible, setPopupVisible] = useAtom(popupVisibleState);

  useEffect(() => {
    if (!localeParam || localeParam === locale) return;
    console.log('>>locale_param<<', localeParam);
    switch (localeParam) {
      case 'en':
        setLocale('en');
        break;
      case 'th':
      default:
        setLocale('th');
        break;
    }
  }, [localeParam, locale, setLocale]);

  const bind = useCallback(() => {
    (async () => {
      await Promise.all([
        new Promise(async (resolve, reject) => {
          try {
            const localizations = await listLocalizations();
            setLocalizations(localizations);
            resolve(localizations);
          } catch (error) {
            console.log('>>error<<', 'list_localizations', error);
            reject(error);
          }
        }),
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
  }, [setLocalizations, setFooterMenu, setNavMenu]);

  // Observables
  store.locale = locale;
  store.localizations = localizations;
  store.navMenu = navMenu;
  store.footerMenu = footerMenu;
  store.socialMenu = socialMenu;
  store.popupVisible = popupVisible;

  // Actions
  store.bind = bind;
  store.setPopupVisible = setPopupVisible;

  return store;
};
