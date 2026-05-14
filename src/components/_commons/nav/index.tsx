import { Link } from "react-router-dom";

import SafeArea from '../safe-area';
import {p} from '../../../utils/path-utils';

const Nav = () => {
  return (
    <div className="z-[10] absolute top-0 left-1/2 -translate-x-1/2 w-full h-[112px] flex flex-col justify-stretch items-stretch">
      <SafeArea>
        <div className="w-full h-full flex flex-row justify-start items-center">
          <img className="h-12 lg:h-16" alt="logo" src={p('logo-light.png')} />
          <div className="flex-1" />
          <div className="lg:hidden flex flex-row justify-center items-center">
            <Link to="/">
              <img className="w-6 h-auto" alt="Menu" src={p('mock/commons/nav/ic-menu.svg')} />
            </Link>
          </div>
          <ul className="hidden lg:flex flex-row gap-x-6 text-white">
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
              <Link to="/">กิจกรรมของเรา</Link>
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
