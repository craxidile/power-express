import {PropsWithChildren, useMemo} from 'react';
import {Link} from "react-router-dom";

import SafeArea from '../safe-area';
import {p} from '../../../utils/path-utils';

export enum NavTheme {
  light = 'light',
  dark = 'dark',
}

export interface NavProps {
  theme?: NavTheme;
}

const Nav = (props: PropsWithChildren<NavProps>) => {
  const {theme = NavTheme.light} = props;

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
        return 'lg:h-16';
      case NavTheme.dark:
      default:
        return 'lg-h-12';
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

  return (
    <div
      className="z-[10] absolute top-0 left-1/2 -translate-x-1/2 w-full h-[112px] flex flex-col justify-stretch items-stretch">
      <SafeArea>
        <div className="w-full h-full flex flex-row justify-start items-center">
          <img className={`h-12 ${logoHeight}`} alt="logo" src={p(logoImage)}/>
          <div className="flex-1"/>
          <div className="lg:hidden flex flex-row justify-center items-center">
            <Link to="/">
              <img className="w-6 h-auto" alt="Menu" src={p(`mock/commons/nav/${menuImage}`)}/>
            </Link>
          </div>
          <ul className={`hidden lg:flex flex-row gap-x-6 ${textColor}`}>
            <li>
              <Link to="/">เกี่ยวกับเรา</Link>
            </li>
            <li>
              <Link to="/">ธุรกิจของเรา</Link>
            </li>
            <li>
              <Link to="/project">โครงการของเรา</Link>
            </li>
            <li>
              <Link to="/activities">กิจกรรมของเรา</Link>
            </li>
            <li className="font-semibold text-cta-primary">
              <Link to="/">ติดต่อเรา</Link>
            </li>
          </ul>
        </div>
      </SafeArea>
    </div>
  );
};

export default Nav;
