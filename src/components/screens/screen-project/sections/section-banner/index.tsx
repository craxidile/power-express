import {p} from "../../../../../utils/path-utils";

const SectionBanner = () => {
  return (
    <section className="h-[560px] lg:h-[800px]"
         style={{ background: `url(${p('mock/project/section-banner/mock-banner.jpg')}) no-repeat center/cover`}}/>
  );
};

export default SectionBanner;
