import { useEffect, useMemo } from 'react';

import { p } from '../../../utils/path-utils';
import { useVmScreen } from '../../../stores/vm-screen';
import { useVmScreenProjectList } from '../../../stores/vm-screen-project-list';
import LayoutBanner from '../../layouts/layout-banner';
import ProjectBannerRow from '../../_commons/project-banner-row';
import SafeArea from '../../_commons/safe-area';
import ProjectGrid from '../../_commons/project-grid';
import ScrollStrip from '../../_commons/scroll-strip';
import ProjectYearBox from '../../_commons/project-year-box';
import { l } from '../../../utils/localization-utils';
import TextLines from '../../_commons/text-lines';

const ScreenProjectList = () => {
  const { locale = 'th', localizations = [] } = useVmScreen();

  const vmScreenProjectList = useVmScreenProjectList();
  const { projects = [] } = vmScreenProjectList;

  useEffect(() => {
    if (!vmScreenProjectList.bind) return;
    vmScreenProjectList.bind();
  }, [vmScreenProjectList]);

  const banner = useMemo(() => {
    return (
      <div
        className="flex-1 flex flex-col justify-start items-stretch"
        style={{
          background: `url(${p('mock/project-list/mock-banner.jpg')}) no-repeat center/cover`,
        }}
      >
        <div className="bg-black-a40 absolute left-0 top-0 w-full h-full flex flex-col justify-center items-center">
          <div className="-translate-y-[10%] gap-y-16 lg:gap-y-12 flex flex-col justify-center items-center">
            <div className="flex flex-col justify-start items-stretch">
              <h1 className="hidden lg:block text-center text-white text-9xl font-medium">
                {l(locale, localizations, 'project-list.title-projects')}
              </h1>
              <h1 className="lg:hidden text-center text-white text-7xl font-medium">
                <TextLines
                  text={l(
                    locale,
                    localizations,
                    'project-list.sm:title-projects'
                  )}
                />
              </h1>
            </div>
            <div className="gap-y-12 lg:gap-y-0 lg:gap-x-16 flex flex-col lg:flex-row justify-center items-center">
              <ProjectBannerRow
                title={l(locale, localizations, 'project-list.no-of-sites')}
                value="14"
              />
              <div className="hidden lg:block w-px h-full max-h-16 bg-white-a30" />
              <ProjectBannerRow
                title={l(
                  locale,
                  localizations,
                  'project-list.total-capacities'
                )}
                value={`5.96 ${l(locale, localizations, 'general.mw')}`}
              />
            </div>
          </div>
        </div>
        <div className="lg:hidden flex flex-col justify-end items-center">
          <ScrollStrip text={l(locale, localizations, 'general.explore')} />
        </div>
      </div>
    );
  }, [locale, localizations]);

  return (
    <LayoutBanner banner={banner}>
      <div className="py-10 lg:py-20 flex flex-col justify-start items-stretch">
        <SafeArea>
          <div className="gap-y-6 lg:gap-y-20 flex flex-col justify-start items-stretch">
            <h2 className="uppercase text-secondary text-center text-sm lg:text-2xl font-medium">
              {l(locale, localizations, 'project-list.title-projects')}
            </h2>
            <div className="gap-x-6 gap-y-4 lg:gap-y-10 lg:gap-x-20 flex flex-row justify-center items-center flex-wrap">
              <ProjectYearBox from={2015} to={2017} />
              <ProjectYearBox from={2018} to={2020} />
              <ProjectYearBox from={2021} to={2023} />
              <ProjectYearBox from={2024} to={2025} />
              <ProjectYearBox from={2025} isActive />
            </div>
            <ProjectGrid locale={locale} projects={projects} />
          </div>
        </SafeArea>
      </div>
    </LayoutBanner>
  );
};

export default ScreenProjectList;
