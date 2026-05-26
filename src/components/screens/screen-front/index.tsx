import React, { ReactElement, useEffect } from 'react';

import SectionSlogan from './sections/section-slogan';
import SectionBenefits from './sections/section-benefits';
import SectionBusiness from './sections/section-business';
import SectionContact from './sections/section-contact';
import SectionProjects from './sections/section-projects';
import SectionActivities from './sections/section-activities';
import SectionPartners from '../../sections/section-partners';
import SectionImpact from './sections/section-impact';
import Footer from '../../_commons/footer';
import { useVmScreenFront } from '../../../stores/vm-screen-front';

const ScreenFront = (): ReactElement => {
  const vmScreenFront = useVmScreenFront();
  const { partners = [] } = vmScreenFront;

  useEffect(() => {
    if (!vmScreenFront.bind) return;
    vmScreenFront.bind();
  }, [vmScreenFront]);

  return (
    <div className="flex flex-col justify-start items-stretch">
      <SectionSlogan />
      <SectionBenefits />
      <SectionBusiness />
      <SectionProjects />
      <SectionPartners partners={partners} />
      <SectionImpact />
      <SectionActivities />
      <SectionContact />
      <Footer />
    </div>
  );
};

export default ScreenFront;
