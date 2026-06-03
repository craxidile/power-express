import { useEffect, useMemo } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { useVmScreen } from '../../../stores/vm-screen';
import { useVmScreenProject } from '../../../stores/vm-screen-project';
import LayoutStandard from '../../layouts/layout-standard';
import SectionBanner from './sections/section-banner';
import SectionDetails from './sections/section-details';
import SectionNext from '../../sections/section-next';
import { l } from '../../../utils/localization-utils';

const ScreenProject = () => {
  const params = useParams();
  const { id } = params;

  const { locale = 'th', localizations = [] } = useVmScreen();

  const vmScreenProject = useVmScreenProject();
  const { project } = vmScreenProject;
  const { nextProjectId } = project ?? {};

  useEffect(() => {
    if (!vmScreenProject.bind) return;
    vmScreenProject.bind(id ?? '');
  }, [id, vmScreenProject]);

  const url = useMemo(
    () => `/${locale}/project/${nextProjectId}`,
    [locale, nextProjectId]
  );

  return (
    <LayoutStandard>
      <div className="flex flex-col justify-start items-stretch">
        <SectionBanner />
        <SectionDetails />
        {nextProjectId && (
          <SectionNext
            url={url}
            text={l(locale, localizations, 'project.next-project')}
          />
        )}
      </div>
    </LayoutStandard>
  );
};

export default ScreenProject;
