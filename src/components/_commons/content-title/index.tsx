import { PropsWithChildren } from 'react';

export interface ScreenContentProps {
  caption?: string;
  title: string;
  subtitle?: string;
}

const ContentTitle = (props: PropsWithChildren<ScreenContentProps>) => {
  const { caption, title, subtitle, children } = props;
  return (
    <div className="gap-y-16 flex flex-col justify-start items-stretch">
      <div className="gap-y-3 lg:gap-y-4 flex flex-col justify-start items-start">
        {caption && (
          <span className="lg:mb-4 font-medium text-base lg:text-2xl text-title-pale uppercase">
            {caption}
          </span>
        )}
        <h1 className="text-5xl lg:text-6hxl font-medium leading-[1.2] text-title-dark">
          {title}
        </h1>
        {subtitle && (
          <p className="text-title-light text-sm lg:text-base">{subtitle}</p>
        )}
      </div>
      {children}
    </div>
  );
};

export default ContentTitle;
