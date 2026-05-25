import { PropsWithChildren } from 'react';

import { HeroBanner } from '../../../models/hero-banner';

import s from './styles.module.css';
import TextLines from '../text-lines';

export interface BusinessBannerProps {
  heroBanner: HeroBanner;
}

const BusinessBanner = (props: PropsWithChildren<BusinessBannerProps>) => {
  const { heroBanner } = props;
  const { banner, title, subtitle, icon, excerpt } = heroBanner;

  return (
    <div
      className="embla__slide relative w-screen h-full flex flex-col justify-start items-stretch"
      style={{ background: `url(${banner}) no-repeat center/cover` }}
    >
      <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-b from-[rgba(0,0,0,0)] to-black" />
      <div className="relative w-full h-full px-6 py-10 lg:pt-[160px] lg:pb-[80px] flex flex-col justify-start items-stretch">
        <div className="flex-1" />
        <div className="mb-16 gap-y-5 flex flex-col justify-start items-stretch">
          <div
            className={`self-center w-16 h-16 lg:w-[100px] lg:h-[100px] rounded-full bg-white-a50 flex flex-col justify-center items-center ${s.glass}`}
          >
            <img className="block w-8 h-auto lg:w-10" alt="Icon" src={icon} />
          </div>
          <h3 className="m-0 p-0 leading-none text-white font-medium text-3xl lg:text-4hxl text-center">
            {title}
          </h3>
          <span className="text-sm lg:text-base font-medium text-cta-primary text-center">
            {subtitle}
          </span>
          <div className="flex flex-col justify-start items-stretch">
            <p className="lg:hidden text-base text-white text-center">
              {excerpt}
            </p>
            <p className="hidden lg:inline text-base text-white text-center">
              <TextLines text={excerpt} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessBanner;
