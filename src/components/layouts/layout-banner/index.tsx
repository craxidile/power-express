import { PropsWithChildren, ReactElement } from 'react';
import Nav, { NavTheme } from '../../_commons/nav';
import Footer from '../../_commons/footer';

export interface LayoutBannerProps {
  banner?: ReactElement;
  isFilled?: boolean;
}

const LayoutBanner = (props: PropsWithChildren<LayoutBannerProps>) => {
  const { banner, isFilled, children } = props;

  return (
    <div className="min-h-screen flex flex-col justify-start items-stretch">
      <div
        className={`relative h-svh min-h-none lg:h-auto lg:min-h-[720px] flex flex-col justify-stretch items-stretch ${!isFilled ? 'lg:max-h-none' : 'max-h-[480px]'}`}
      >
        <Nav theme={NavTheme.light} />
        {banner}
      </div>
      <div className="flex-1 flex flex-col justify-start items-stretch">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default LayoutBanner;
