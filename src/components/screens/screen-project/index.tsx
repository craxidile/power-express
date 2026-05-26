import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useVmScreenProject } from '../../../stores/vm-screen-project';
import LayoutStandard from '../../layouts/layout-standard';
import SectionBanner from './sections/section-banner';
import SectionDetails from './sections/section-details';
import SectionNext from '../../sections/section-next';

const ScreenProject = () => {
  const params = useParams();
  const { id } = params;

  const vmScreenProject = useVmScreenProject();
  useEffect(() => {
    if (!vmScreenProject.bind) return;
    vmScreenProject.bind(id ?? '');
  }, [id, vmScreenProject]);

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
