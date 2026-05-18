import {PropsWithChildren, useCallback, useEffect, useMemo} from 'react';
import { Link, useLocation } from 'react-router-dom';

import SafeArea from '../safe-area';
import {p} from '../../../utils/path-utils';
import {useVmScreen} from "../../../stores/vm-screen";
import {MenuItem} from "../../../models/menu";
import LayoutPopup from "../../layouts/layout-popup";

export enum NavTheme {
  light = 'light',
  dark = 'dark',
}

export interface NavProps {
  theme?: NavTheme;
}

const Nav = (props: PropsWithChildren<NavProps>) => {
  const {theme = NavTheme.light} = props;

  const {pathname} = useLocation();

  const {locale = 'th', navMenu, popupVisible, setPopupVisible} = useVmScreen();
  const menuItems = useMemo((): MenuItem[] => {
    if (!navMenu) return [];
    const {items} = navMenu;
    return items ?? [];
  }, [navMenu]);

  const textColor = useMemo(() => {
    switch (theme) {
      case NavTheme.light:
        return 'text-white';
      case NavTheme.dark:
      default:
        return 'text-black';
    }
  }, [theme]);

  const logoImage = useMemo(() => {
    switch (theme) {
      case NavTheme.light:
        return 'logo-light.png';
      case NavTheme.dark:
      default:
        return 'logo-dark.png';
    }
  }, [theme]);

  const logoHeight = useMemo(() => {
    switch (theme) {
      case NavTheme.light:
        return 'h-12 lg:h-16';
      case NavTheme.dark:
      default:
        return 'h-9 lg-h-12';
    }
  }, [theme]);

  const menuImage = useMemo(() => {
    switch (theme) {
      case NavTheme.light:
        return 'ic-menu-light.svg';
      case NavTheme.dark:
      default:
        return 'ic-menu-dark.svg';
    }
  }, [theme]);

  useEffect(() => {
    if (!setPopupVisible) return;
    setPopupVisible(false);
  }, [pathname, setPopupVisible]);

  const onClickMenu = useCallback(() => {
    if (!setPopupVisible) return;
    setPopupVisible(!popupVisible);
  }, [setPopupVisible, popupVisible])

  return (
    <>
      <div
        className="z-[10] absolute top-0 left-1/2 -translate-x-1/2 w-full h-24 lg:h-[112px] flex flex-col justify-stretch items-stretch">
        <SafeArea>
          <div className="w-full h-full flex flex-row justify-start items-center">
            <Link to="/">
              <img className={`${logoHeight}`} alt="logo" src={p(logoImage)}/>
            </Link>
            <div className="flex-1"/>
            <div className="lg:hidden flex flex-row justify-center items-center">
              <button onClick={onClickMenu}>
                <img className="w-6 h-auto" alt="Menu" src={p(`mock/commons/nav/${menuImage}`)}/>
              </button>
            </div>
            <ul className={`hidden lg:flex flex-row gap-x-6 ${textColor}`}>
              {menuItems.map((menuItem) => {
                const {id, title, url, isCta} = menuItem;
                const localizedTitle = title[locale] as string;
                return (
                  <li key={id} className={!isCta ? '' : 'font-semibold text-cta-primary'}>
                    <Link to={url}>
                      <span className={pathname !== url ? '' : 'underline'}>{localizedTitle}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </SafeArea>
      </div>
      <LayoutPopup visible={popupVisible ?? false}>
        <div className="px-8 pb-8 absolute left-0 top-0 w-full h-full bg-white flex flex-col justify-stretch items-stretch">
          <div className="py-8 h-24 lg:h-[112px] flex flex-row justify-between items-center">
            <img className="w-6 h-auto" alt="Icon" src={p('mock/commons/nav/ic-menu-dark.svg')} />
            <button className="translate-x-3" onClick={onClickMenu}>
              <img className="w-8 h-auto" alt="Menu" src={p('mock/commons/nav/ic-close.svg')} />
            </button>
          </div>
          <ul className="flex flex-col justify-start items-stretch">
            {menuItems.map((menuItem) => {
              const {id, title, url, isCta} = menuItem;
              const localizedTitle = title[locale] as string;
              return (
                <li key={id} className={`py-4 ${!isCta ? '' : 'font-semibold text-cta-primary'}`}>
                  <Link to={url}>
                    <span className={`text-2xl ${pathname !== url ? '' : 'font-semibold'}`}>
                      {localizedTitle}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </LayoutPopup>
    </>
  );
};

export default Nav;
