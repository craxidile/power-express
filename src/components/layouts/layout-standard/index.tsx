import {PropsWithChildren, useEffect} from "react";

import Nav, {NavTheme} from "../../_commons/nav";
import Footer from "../../_commons/footer";
import {IVmScreen, useVmScreen} from "../../../stores/vm-screen";

const LayoutStandard = (props: PropsWithChildren) => {
  const { children } = props;
  const vmScreen: IVmScreen = useVmScreen();

  useEffect(() => {
    if (!vmScreen.bind) return;
    vmScreen.bind();
  }, [vmScreen]);

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
