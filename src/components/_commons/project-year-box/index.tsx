import { PropsWithChildren } from 'react';

export interface ProjectYearBoxProps {
  from: number;
  to?: number;
  isActive?: boolean;
}

const ProjectYearBox = (props: PropsWithChildren<ProjectYearBoxProps>) => {
  const { from, to, isActive } = props;
  return (
    <div
      className={`w-32 lg:w-40 min-h-6 flex flex-col justify-center items-center whitespace-nowrap font-medium ${!isActive ? 'text-secondary' : 'text-cta-primary border-b border-b-cta-primary'} uppercase`}
    >
      {from} - {to ?? 'Now'}
    </div>
  );
};

export default ProjectYearBox;
