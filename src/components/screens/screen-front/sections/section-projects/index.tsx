import {Link} from "react-router-dom";

import SafeArea from "../../../../_commons/safe-area";
import ProjectGrid from "../../../../_commons/project-grid";
import {p} from "../../../../../utils/path-utils";

const SectionProjects = () => {
  return (
    <section className="py-10 lg:py-20 flex flex-col justify-start items-stretch">
      <SafeArea>
        <div className="gap-y-6 lg:gap-y-20 flex flex-col justify-start items-stretch">
          <h2 className="uppercase text-secondary text-center text-sm lg:text-2xl font-medium">โครงการของเรา</h2>
          <ProjectGrid />
          <div className="flex flex-row justify-center items-center">
          <Link to="/">
            <div className="gap-x-2 lg:gap-x-4 py-3 lg:py-4 px-6 flex flex-row justify-center items-center border border-gray-medium">
              <span className="text-base lg:text-xl font-medium">ดูโครงการทั้งหมด (14)</span>
              <img className="w-8 lg:w-auto h-auto" alt="More" src={p('mock/front/section-projects/ic-more.svg')} />
            </div>
          </Link>
          </div>
        </div>
      </SafeArea>
    </section>
  );
};

export default SectionProjects;
