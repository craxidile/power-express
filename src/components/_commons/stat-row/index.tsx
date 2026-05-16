import {PropsWithChildren, useMemo} from "react";

export enum StatRowTheme {
  normal = 'normal',
  primary = 'primary',
  secondary = 'secondary',
}

export interface StatRowProps {
  icon: string;
  value: string;
  title: string;
  excerpt: string;
  theme?: StatRowTheme;
}

const StatRow = (props: PropsWithChildren<StatRowProps>) => {
  const {icon, value, title, excerpt, theme = StatRowTheme.normal} = props;

  const textColor = useMemo(() => {
    switch (theme) {
      case StatRowTheme.primary:
        return 'text-cta-primary';
      case StatRowTheme.secondary:
        return 'text-green-tag';
      default:
      case StatRowTheme.normal:
        return '';
    }
  }, [theme]);

  return (
    <div className="gap-x-4 flex flex-row justify-start items-start">
      <div className="w-[100px] h-[100px] flex flex-col items-center justify-center ">
        <img className="block w-10 h-auto" alt="Icon" src={icon}/>
      </div>
      <div className="flex-1 gap-y-1 flex flex-col justify-start items-start">
        <span className={`block font-medium text-3hxl ${textColor}`}>{value}</span>
        <span className="block text-xl text-title-light uppercase">{title}</span>
        <span className="block text-gray-medium text-base">{excerpt}</span>
      </div>
    </div>
  );
};

export default StatRow;
