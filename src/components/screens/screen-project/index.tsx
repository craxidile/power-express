import LayoutStandard from '../../layouts/layout-standard';

import SectionBanner from './sections/section-banner';
import SectionDetails from './sections/section-details';
import SectionNext from '../../sections/section-next';

const ScreenProject = () => {
  return (
    <LayoutStandard>
      <div className="flex flex-col justify-start items-stretch">
        <SectionBanner />
        <SectionDetails />
        <SectionNext />
      </div>
    </LayoutStandard>
  );
};

export default ScreenProject;
