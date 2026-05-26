import React, { PropsWithChildren, ReactElement, useEffect } from 'react';

import { l } from '../../../utils/localization-utils';
import { useVmScreen } from '../../../stores/vm-screen';
import { useVmScreenActivityList } from '../../../stores/vm-screen-activity-list';
import LayoutStandard from '../../layouts/layout-standard';
import SafeArea from '../../_commons/safe-area';
import ActivityGrid from '../../_commons/activity-grid';
import HlActivityBox from '../../_commons/hl-activity-box';

const ProjectScreen = (props: PropsWithChildren): ReactElement => {
  const { locale = 'th', localizations = [] } = useVmScreen();

  const vmScreenActivityList = useVmScreenActivityList();
  const { headActivity, otherActivities } = vmScreenActivityList;
  useEffect(() => {
    if (!vmScreenActivityList.bind) return;
    vmScreenActivityList.bind();
  }, [vmScreenActivityList]);

  return (
    <LayoutStandard>
      <div className="py-20 flex flex-col justify-start items-stretch">
        <SafeArea>
          <div className="gap-y-16 flex flex-col justify-start items-stretch">
            <div className="gap-y-4 flex flex-col justify-start items-start">
              <h2 className="uppercase text-title-pale text-center text-2xl font-medium">
                {l(locale, localizations, 'activity-list.subtitle-activities')}
              </h2>
              <h1 className="font-medium text-6hxl leading-none">
                {l(locale, localizations, 'activity-list.title-activities')}
              </h1>
              <span className="text-lg lg:text-base text-title-light">
                {l(locale, localizations, 'activity-list.excerpt-activities')}
              </span>
            </div>
            {headActivity && (
              <div className="flex flex-col justify-start items-stretch">
                <HlActivityBox locale={locale} activity={headActivity} />
              </div>
            )}
            {otherActivities && (
              <ActivityGrid locale={locale} activities={otherActivities} />
            )}
          </div>
        </SafeArea>
      </div>
    </LayoutStandard>
  );
};

export default ProjectScreen;
