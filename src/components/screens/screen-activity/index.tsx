import React, { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { l } from '../../../utils/localization-utils';
import { useVmScreen } from '../../../stores/vm-screen';
import { useVmScreenActivity } from '../../../stores/vm-screen-activity';
import LayoutStandard from '../../layouts/layout-standard';
import SectionDetails from './sections/section-details';
import SectionNext from '../../sections/section-next';
import { p } from '../../../utils/path-utils';
import Loading from '../../_commons/loading';
import Seo from '../../_commons/seo';
import { stripText } from '../../../config/seo-text';

const ScreenActivity = () => {
  const params = useParams();
  const { id } = params;

  const { locale = 'th', localizations = [] } = useVmScreen();

  const vmScreenActivity = useVmScreenActivity();
  const { activity, loading } = vmScreenActivity;
  const { nextActivityId } = activity ?? {};

  const url = useMemo(
    () => `/${locale}/activity/${nextActivityId}`,
    [locale, nextActivityId]
  );

  useEffect(() => {
    if (!vmScreenActivity.bind) return;
    vmScreenActivity.bind(id ?? '');
  }, [id, vmScreenActivity]);

  return (
    <LayoutStandard>
      {activity && (
        <Seo
          locale={locale}
          title={activity.title[locale]}
          description={stripText(activity.excerpt[locale])}
          path={`activity/${activity.id}`}
          image={activity.banner || activity.thumbnail}
        />
      )}
      {!loading ? (
        <>
          <SectionDetails />
          {nextActivityId && (
            <SectionNext
              url={url}
              text={l(locale, localizations, 'activity.next-activity')}
            />
          )}
        </>
      ) : (
        <Loading />
      )}
    </LayoutStandard>
  );
};

export default ScreenActivity;
