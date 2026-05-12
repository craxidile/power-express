import React, {PropsWithChildren, ReactElement} from 'react';

import SectionSlogan from "./sections/section-slogan";
import SectionBenefits from "./sections/section-benefits";
import SectionBusiness from "./sections/section-business";
import SectionContact from "./sections/section-contact";
import SectionProjects from "./sections/section-projects";

const FrontScreen = (props: PropsWithChildren): ReactElement => {
  return (
    <div className="flex flex-col justify-start items-stretch">
      <SectionSlogan />
      <SectionBenefits />
      <SectionBusiness />
      <SectionProjects />
      <SectionContact />
    </div>
  );
};

export default FrontScreen;
