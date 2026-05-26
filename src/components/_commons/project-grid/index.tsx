import { PropsWithChildren } from 'react';

import { LocaleKey } from '../../../models/_commons/localized';
import { Project } from '../../../models/project';
import ProjectBox from '../project-box';

export interface ProjectGridProps {
  locale?: LocaleKey;
  projects: Project[];
}

const ProjectGrid = (props: PropsWithChildren<ProjectGridProps>) => {
  const { locale = 'th', projects } = props;

  return (
    <ul className="gap-x-0 lg:gap-x-12 gap-y-20 grid grid-cols-1 lg:grid-cols-3">
      {projects.map((project) => {
        const { id } = project;
        return (
          <li key={id}>
            <ProjectBox locale={locale} project={project} />
          </li>
        );
      })}
    </ul>
  );
};

export default ProjectGrid;
