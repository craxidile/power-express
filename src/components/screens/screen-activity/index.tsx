import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useVmScreenActivity } from '../../../stores/vm-screen-activity';
import LayoutStandard from '../../layouts/layout-standard';
import SectionDetails from './sections/section-details';
import SectionNext from '../../sections/section-next';

const ScreenActivity = () => {
  const params = useParams();
  const { id } = params;

  const vmScreenActivity = useVmScreenActivity();
  useEffect(() => {
    if (!vmScreenActivity.bind) return;
    vmScreenActivity.bind(id ?? '');
  }, [id, vmScreenActivity]);

  return (
    <LayoutStandard>
      <SectionDetails />
      <SectionNext />
    </LayoutStandard>
  );
};

export default ScreenActivity;
