import LayoutStandard from "../../layouts/layout-standard";

import SectionBanner from "./sections/section-banner";
import SectionDetails from "./sections/section-details";

const ScreenProject = () => {
  return (
    <LayoutStandard>
      <div className="flex flex-col justify-start items-stretch">
        <SectionBanner />
        <SectionDetails />
      </div>
    </LayoutStandard>
  );
};

export default ScreenProject;
