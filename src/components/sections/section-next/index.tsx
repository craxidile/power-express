import {Link} from "react-router-dom";

import {p} from "../../../utils/path-utils";
import SafeArea from "../../_commons/safe-area";

const SectionNext = () => {
  return (
    <div className="pb-20 flex flex-col justify-start items-stretch">
      <SafeArea>
        <div className="mt-4 lg:mt-0 gap-x-4 pt-16 flex flex-row justify-start items-center border-t border-t-sep-smoke">
          <Link to="/">
            <span className="text-title-pale text-base">โปรเจกต์ถัดไป</span>
          </Link>
          <Link to="/">
            <img className="h-6 w-auto" alt="Next" src={p('mock/project/section-details/ic-next.svg')}/>
          </Link>
        </div>
      </SafeArea>
    </div>

  );
}

export default SectionNext;
