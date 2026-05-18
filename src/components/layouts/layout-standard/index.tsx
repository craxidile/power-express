import {PropsWithChildren} from "react";

import Nav, {NavTheme} from "../../_commons/nav";
import Footer from "../../_commons/footer";

const LayoutStandard = (props: PropsWithChildren) => {
  const { children } = props;

  return (
    <div className="min-h-screen flex flex-col justify-start items-stretch">
      <div className="h-[112px] flex flex-row justify-start items-stretch">
        <Nav theme={NavTheme.dark} />
      </div>
      <div className="flex-1 flex flex-col justify-start items-stretch">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default LayoutStandard;
