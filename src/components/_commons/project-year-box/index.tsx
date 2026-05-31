import { PropsWithChildren } from 'react';

export interface ProjectYearBoxProps {
  from: number;
  to?: number;
  isActive?: boolean;
  onClick?: () => void;
}

const ProjectYearBox = (props: PropsWithChildren<ProjectYearBoxProps>) => {
  const { from, to, isActive, onClick } = props;
  return (
    <button
      className={`w-32 lg:w-40 min-h-6 flex flex-col justify-center items-center whitespace-nowrap font-medium ${!isActive ? 'text-secondary' : 'text-cta-primary border-b border-b-cta-primary'} uppercase`}
      onClick={() => !isActive && onClick && onClick()}
    >
      {from} - {to ?? 'Now'}
    </button>
  );
};

export default ProjectYearBox;
