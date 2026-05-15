import {PropsWithChildren, ReactElement} from "react";
import Nav, {NavTheme} from "../../_commons/nav";
import Footer from "../../_commons/footer";

export interface LayoutBannerProps {
  banner?: ReactElement;
}

const LayoutBanner = (props: PropsWithChildren<LayoutBannerProps>) => {
  const { banner, children } = props;
  return (
    <div className="min-h-screen flex flex-col justify-start items-stretch">
      <div className="h-screen lg:min-h-[900px] flex flex-col justify-stretch items-stretch">
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
