import { PropsWithChildren, useMemo } from 'react';
import { Link } from 'react-router-dom';

import { Locale } from '../../../models/_commons/localized';
import { Project } from '../../../models/project';
import { useVmScreen } from '../../../stores/vm-screen';
import ProjectDetailRow from '../project-detail-row';
import { l } from '../../../utils/localization-utils';

export interface ProjectBoxProps {
  locale?: Locale;
  project: Project;
}

const ProjectBox = (props: PropsWithChildren<ProjectBoxProps>) => {
  const { localizations = [] } = useVmScreen();

  const { locale = 'th', project } = props;
  const {
    id,
    thumbnail,
    title,
    excerpt,
    client,
    location,
    capacity,
    completion,
  } = project;

  const localizedTitle = useMemo(
    () => title[locale ?? 'th'] ?? '',
    [title, locale]
  );

  const localizedExcerpt = useMemo(
    () => excerpt[locale ?? 'th'] ?? '',
    [excerpt, locale]
  );

  const localizedClient = useMemo(
    () => client[locale ?? 'th'] ?? '',
    [client, locale]
  );

  const localizedLocation = useMemo(
    () => location[locale ?? 'th'] ?? '',
    [location, locale]
  );

  return (
    <Link to={`/${locale}/project/${id ?? 'test'}`}>
      <div className="h-full flex flex-col justify-start items-stretch">
        <div
          className="aspect-[0.8291] bg-gray-300"
          style={{ background: `url(${thumbnail}) no-repeat center/cover` }}
        />
        <h2 className="block mt-6 text-3hxl font-medium leading-[1.2]">
          {localizedTitle}
        </h2>
        <div className="flex-1" />
        <span className="mt-3 text-base text-gray-excerpt line-clamp-3">
          {localizedExcerpt}
        </span>
        <div className="my-4 h-px bg-sep-pale" />
        <ul className="gap-4 grid grid-cols-2">
          <li>
            <ProjectDetailRow
              title={l(locale, localizations, 'project-box.client')}
              text={localizedClient}
            />
          </li>
          <li>
            <ProjectDetailRow
              title={l(locale, localizations, 'project-box.location')}
              text={localizedLocation}
            />
          </li>
          <li>
            <ProjectDetailRow
              isCta
              title={l(locale, localizations, 'project-box.capacity')}
              text={`${capacity} kW`}
            />
          </li>
          <li>
            <ProjectDetailRow
              title={l(locale, localizations, 'project-box.completion')}
              text={`${completion}`}
            />
          </li>
        </ul>
        <div className="mt-5 h-px bg-sep-pale" />
      </div>
    </Link>
  );
};

export default ProjectBox;
