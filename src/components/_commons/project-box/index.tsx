import { PropsWithChildren, useEffect, useMemo, useState } from 'react';
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
  const { localizations = [], windowWidth } = useVmScreen();

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

  const [isLongText, setLongText] = useState<boolean>(false);

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

  useEffect(() => {
    if (!windowWidth || windowWidth <= 1024) {
      return setLongText(false);
    }
    setLongText(true);
  }, [localizedClient, windowWidth]);

  return (
    <Link to={`/${locale}/project/${id ?? 'test'}`}>
      <div className="h-full flex flex-col justify-start items-stretch">
        <div
          className="flex-shrink-0 aspect-[0.8291] bg-gray-300"
          style={{ background: `url(${thumbnail}) no-repeat center/cover` }}
        />
        <h2 className="flex-shrink-0 block mt-6 text-3hxl font-medium leading-[1.2]">
          {localizedTitle}
        </h2>
        <div className="flex-1" />
        <span className="mt-3 text-base text-gray-excerpt line-clamp-3">
          {localizedExcerpt}
        </span>
        <div className="flex-shrink-0 my-4 h-px bg-sep-pale" />
        <ul className="flex-shrink-0 gap-4 grid grid-cols-2">
          <li>
            <ProjectDetailRow
              title={l(locale, localizations, 'project-box.client')}
              isLongText={isLongText}
              text={localizedClient}
            />
          </li>
          <li>
            <ProjectDetailRow
              title={l(locale, localizations, 'project-box.location')}
              isLongText={isLongText}
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
