import { Link } from 'react-router-dom';

import { p } from '../../../../../utils/path-utils';
import { l } from '../../../../../utils/localization-utils';
import SafeArea from '../../../../_commons/safe-area';
import ProjectGrid from '../../../../_commons/project-grid';
import { useVmScreen } from '../../../../../stores/vm-screen';
import { useVmScreenFront } from '../../../../../stores/vm-screen-front';

const SectionProjects = () => {
  const { locale = 'th', localizations = [] } = useVmScreen();
  const { projects = [], projectCount, projectSummary } = useVmScreenFront();

  return (
    <section className="py-10 lg:py-20 flex flex-col justify-start items-stretch">
      <SafeArea>
        <div className="gap-y-6 lg:gap-y-20 flex flex-col justify-start items-stretch">
          <h2 className="uppercase text-secondary text-center text-sm lg:text-2xl font-medium">
            {l(locale, localizations, 'front.title-projects')}
          </h2>
          <ProjectGrid locale={locale} projects={projects} />
          <div className="flex flex-row justify-center items-center">
            <Link to={`/${locale}/project`}>
              <div className="gap-x-2 lg:gap-x-4 py-3 lg:py-4 px-6 flex flex-row justify-center items-center border border-gray-medium">
                <span className="text-base lg:text-xl font-medium uppercase">
                  {l(locale, localizations, 'front.all-projects') + ' '}(
                  {projectSummary?.totalProjects ?? 0})
                </span>
                <img
                  className="w-8 lg:w-auto h-auto"
                  alt="More"
                  src={p('mock/front/section-projects/ic-more.svg')}
                />
              </div>
            </Link>
          </div>
        </div>
      </SafeArea>
    </section>
  );
};

export default SectionProjects;
