import { useEffect, useMemo } from 'react';

import { p } from '../../../utils/path-utils';
import { l } from '../../../utils/localization-utils';
import { useVmScreen } from '../../../stores/vm-screen';
import { useVmScreenAbout } from '../../../stores/vm-screen-about';
import LayoutBanner from '../../layouts/layout-banner';
import SafeArea from '../../_commons/safe-area';
import SectionPartners, {
  SectionPartnersTheme,
} from '../../sections/section-partners';
import SectionDetails from './sections/section-details';
import SectionGrowth from './sections/section-growth';
import TextLines from '../../_commons/text-lines';

const ScreenAbout = () => {
  const { locale = 'th', localizations = [] } = useVmScreen();

  const vmScreenAbout = useVmScreenAbout();
  const { partners = [] } = vmScreenAbout;

  useEffect(() => {
    if (!vmScreenAbout.bind) return;
    vmScreenAbout.bind();
  }, [vmScreenAbout]);

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
            <div className="flex-1 flex flex-col justify-center items-stretch">
              <h1 className="hidden lg:block text-white text-9xl font-medium">
                {l(locale, localizations, 'about.title-company')}
              </h1>
              <h1 className="lg:hidden text-white text-7xl font-medium">
                <TextLines
                  text={l(locale, localizations, 'about.sm:title-company')}
                />
              </h1>
            </div>
          </SafeArea>
        </div>
      </div>
    );
  }, [locale, localizations]);

  return (
    <LayoutBanner isFilled banner={banner}>
      <div className="flex flex-col justify-start items-stretch">
        <SectionDetails />
        <SectionGrowth />
        <SectionPartners
          theme={SectionPartnersTheme.light}
          partners={partners}
        />
      </div>
    </LayoutBanner>
  );
};

export default ScreenAbout;
