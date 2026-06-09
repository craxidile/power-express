import React, { ReactElement, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

import { useVmScreen } from '../../../stores/vm-screen';
import { useVmScreenFront } from '../../../stores/vm-screen-front';
import SectionSlogan from './sections/section-slogan';
import SectionBenefits from './sections/section-benefits';
import SectionBusiness from './sections/section-business';
import SectionContact from './sections/section-contact';
import SectionProjects from './sections/section-projects';
import SectionActivities from './sections/section-activities';
import SectionPartners from '../../sections/section-partners';
import SectionImpact from './sections/section-impact';
import Footer from '../../_commons/footer';

const ScreenFront = (): ReactElement => {
  const { hash } = useLocation();

  const [querystring] = useSearchParams();
  const rand = querystring.get('rand');

  const { media } = useVmScreen();

  const vmScreenFront = useVmScreenFront();
  const { loading, partners = [] } = vmScreenFront;

  useEffect(() => {
    if (!vmScreenFront.bind) return;
    vmScreenFront.bind();
  }, [vmScreenFront]);

  useEffect(() => {
    if (loading) return;
    if (!hash) {
      window.scrollTo({ top: 0 });
      return;
    }
    const element = document.getElementById(hash.substring(1));
    if (!element) return;
    const headerOffset = 40;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({ top: offsetPosition });
  }, [hash, loading, rand]);

  return (
    <div className="flex flex-col justify-start items-stretch">
      <SectionSlogan />
      {loading || (
        <>
          <SectionBenefits />
          <SectionBusiness />
          <SectionProjects />
          <SectionPartners partners={partners} />
          <SectionImpact />
          <SectionActivities />
          <SectionContact />
          <Footer />
        </>
      )}
    </div>
  );
};

export default ScreenFront;
