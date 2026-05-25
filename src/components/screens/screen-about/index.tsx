import { useMemo } from 'react';

import LayoutBanner from '../../layouts/layout-banner';
import SafeArea from '../../_commons/safe-area';
import SectionPartners, {
  SectionPartnersTheme,
} from '../../sections/section-partners';
import SectionDetails from './sections/section-details';
import SectionGrowth from './sections/section-growth';
import { p } from '../../../utils/path-utils';

const ScreenAbout = () => {
  const banner = useMemo(() => {
    return (
      <div
        className="flex-1 flex flex-col justify-start items-stretch"
        style={{
          background: `url(${p('mock/about/mock-banner.jpg')}) no-repeat center/cover`,
        }}
      >
        <div className="py-16 lg:py-[84px] bg-black-a40 absolute left-0 top-0 w-full h-full flex flex-col justify-start items-start">
          <SafeArea>
            <div className="flex-1 flex flex-col justify-end items-stretch">
              <h1 className="hidden lg:block text-white text-9xl font-medium">
                เกี่ยวกับเรา
              </h1>
              <h1 className="lg:hidden text-white text-7xl font-medium">
                เกี่ยวกับเรา
              </h1>
            </div>
          </SafeArea>
        </div>
      </div>
    );
  }, []);

  return (
    <LayoutBanner isFilled banner={banner}>
      <div className="flex flex-col justify-start items-stretch">
        <SectionDetails />
        <SectionGrowth />
        <SectionPartners theme={SectionPartnersTheme.light} />
      </div>
    </LayoutBanner>
  );
};

export default ScreenAbout;
