import SafeArea from "../safe-area";
import {p} from "../../../utils/path-utils";
import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-footer pt-16 flex flex-col justify-start items-stretch">
      <SafeArea>
        <div className="gap-y-6 flex flex-col justify-start items-stretch">
          <div className="gap-x-10 flex flex-row justify-start items-stretch">
            <img className="block h-[106px]" alt="Logo" src={p('logo-footer.png')}/>
            <div className="relative flex-1 flex flex-col justify-center items-center">
              <div className="gap-y-3 w-full max-w-[800px] pt-4 pb-9 flex flex-col justify-start items-stretch">
                <span className="block text-lime text-base font-medium">
                  Menu
                </span>
                <ul className="gap-3 flex flex-row justify-start items-start flex-wrap">
                  <li className="flex-1 flex-shrink-0">
                    <Link to="/"><span className="text-sm text-white whitespace-nowrap">หน้าแรก</span></Link>
                  </li>
                  <li className="flex-1 flex-shrink-0">
                    <Link to="/"><span className="text-sm text-white whitespace-nowrap">เกี่ยวกับเรา</span></Link>
                  </li>
                  <li className="flex-1 flex-shrink-0">
                    <Link to="/"><span className="text-sm text-white whitespace-nowrap">ธุรกิจของเรา</span></Link>
                  </li>
                  <li className="flex-1 flex-shrink-0">
                    <Link to="/"><span className="text-sm text-white whitespace-nowrap">โครงการของเรา</span></Link>
                  </li>
                  <li className="flex-1 flex-shrink-0">
                    <Link to="/"><span className="text-sm text-white whitespace-nowrap">กิจกรรมของเรา</span></Link>
                  </li>
                  <li className="flex-1 flex-shrink-0">
                    <Link to="/"><span className="text-sm text-white whitespace-nowrap">ติดต่อเรา</span></Link></li>
                </ul>
              </div>
            </div>
            <div className="gap-y-4 w-[164px] flex flex-col justify-start items-stretch">
              <span className="text-lime text-base font-medium">
                Follow us
              </span>
              <div className="gap-x-4 flex flex-row justify-start items-stretch">
                <Link to="/">
                  <div className="rounded-full bg-white-a10 w-10 h-10 flex flex-col justify-center items-center">
                    <img className="h-5 w-auto" alt="Facebook" src={p('mock/commons/footer/ic-fb.svg')}/>
                  </div>
                </Link>
                <Link to="/">
                  <div className="rounded-full bg-white-a10 w-10 h-10 flex flex-col justify-center items-center">
                    <img className="h-5 w-auto" alt="Facebook" src={p('mock/commons/footer/ic-linked-in.svg')}/>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="p-4 flex flex-col justify-start items-stretch border-t border-t-white-a20">
            <span className="text-white text-sm text-center">
              © 2026 Power Express. สงวนลิขสิทธิ์
            </span>
          </div>
        </div>
      </SafeArea>
    </footer>
  );
};

export default Footer;
