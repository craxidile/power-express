import { PropsWithChildren, useMemo } from 'react';

export enum StatBoxTheme {
  normal = 'normal',
  primary = 'primary',
  secondary = 'secondary',
}

export interface StatBoxProps {
  icon: string;
  value: string;
  title: string;
  theme?: StatBoxTheme;
}

const StatBox = (props: PropsWithChildren<StatBoxProps>) => {
  const { icon, value, title, theme } = props;

  const textColor = useMemo(() => {
    switch (theme) {
      case StatBoxTheme.primary:
        return 'text-cta-primary';
      case StatBoxTheme.secondary:
        return 'text-green-tag';
      default:
      case StatBoxTheme.normal:
        return '';
    }
  }, [theme]);

  return (
    <div className="gap-y-6 min-w-[264px] flex flex-col justify-start items-center">
      <img className="block w-16 h-auto" alt="Icon" src={icon} />
      <span
        className={`block ${textColor} text-center text-8xl lg:text-9xl font-medium leading-none`}
      >
        {value}
      </span>
      <span className="block text-base text-title-light text-center uppercase">
        {title}
      </span>
    </div>
  );
};

export default StatBox;
