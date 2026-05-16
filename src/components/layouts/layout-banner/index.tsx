import {PropsWithChildren, ReactElement, useEffect} from "react";
import Nav, {NavTheme} from "../../_commons/nav";
import Footer from "../../_commons/footer";
import {IVmScreen, useVmScreen} from "../../../stores/vm-screen";

export interface LayoutBannerProps {
  banner?: ReactElement;
  isFilled?: boolean;
}

const LayoutBanner = (props: PropsWithChildren<LayoutBannerProps>) => {
  const { banner, isFilled, children } = props;

  const vmScreen: IVmScreen = useVmScreen();

  useEffect(() => {
    if (!vmScreen.bind) return;
    vmScreen.bind();
  }, [vmScreen]);

  return (
    <div className="min-h-screen flex flex-col justify-start items-stretch">
      <div className={`relative h-screen lg:max-h-none lg:min-h-[900px] flex flex-col justify-stretch items-stretch ${!isFilled ? '' : 'max-h-[640px]'}`}>
        <Nav theme={NavTheme.light} />
        {banner}
      </div>
      <div className="flex-1 flex flex-col justify-start items-stretch">
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default LayoutBanner;
