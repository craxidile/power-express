import React, {PropsWithChildren, ReactElement} from 'react';

import SectionSlogan from "./sections/section-slogan";
import SectionBenefits from "./sections/section-benefits";
import SectionBusiness from "./sections/section-business";

const FrontScreen = (props: PropsWithChildren): ReactElement => {
  return (
    <div className="flex flex-col justify-start items-stretch">
      <SectionSlogan />
      <SectionBenefits />
      <SectionBusiness />
    </div>
  );
};

export default FrontScreen;
