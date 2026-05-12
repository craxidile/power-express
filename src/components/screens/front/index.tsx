import React, {PropsWithChildren, ReactElement} from 'react';

import SectionSlogan from "./sections/section-slogan";

const FrontScreen = (props: PropsWithChildren): ReactElement => {
  return (
    <div className="flex flex-col justify-start items-stretch">
      <SectionSlogan />
    </div>
  );
};

export default FrontScreen;
