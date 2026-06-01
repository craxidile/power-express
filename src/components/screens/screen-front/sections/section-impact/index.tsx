import { useMemo } from 'react';

import { p } from '../../../../../utils/path-utils';
import { l } from '../../../../../utils/localization-utils';
import { useVmScreen } from '../../../../../stores/vm-screen';
import { useVmScreenFront } from '../../../../../stores/vm-screen-front';
import TextLines from '../../../../_commons/text-lines';

const SectionImpact = () => {
  const { locale = 'th', localizations = [] } = useVmScreen();

  const { projectSummary } = useVmScreenFront();
  const { totalProjects = 0, totalCapacities = 0 } = projectSummary ?? {};

  const totalCapacitiesText = useMemo(
    () => totalCapacities.toFixed(2),
    [totalCapacities]
  );

  const localizedExcerptImpact = useMemo(() => {
    const excerpt = l(locale, localizations, 'front.excerpt-impact') ?? '';
    return excerpt
      .replace(/\{\{total-projects}}/g, `${totalProjects}`)
      .replace(/\{\{total-capabilities}}/g, totalCapacitiesText);
  }, [locale, localizations, totalProjects, totalCapacitiesText]);

  return (
    <section className="py-10 lg:pt-[240px] lg:pb-[180px] flex flex-col justify-start items-stretch">
      <div className="gap-y-10 lg:gap-y-[120px] w-full max-w-[1328px] px-6 mx-auto flex flex-col justify-start items-stretch">
        <div className="gap-y-16 lg:gap-y-0 flex flex-col lg:flex-row justify-start items-stretch">
          <div className="lg:flex-1 lg:flex-shrink-0 flex flex-col justify-start items-stretch">
            <div className="gap-y-6 lg:gap-y-10 flex flex-col justify-start items-stretch">
              <h2 className="text-title-light text-sm lg:text-2xl font-medium uppercase">
                {l(locale, localizations, 'front.title-impact')}
              </h2>
              <h6 className="text-4xl lg:text-5xl font-medium leading-[1.2]">
                <TextLines
                  text={l(locale, localizations, 'front.cta-impact')}
                />
              </h6>
              <p className="text-lg text-gray-excerpt">
                {localizedExcerptImpact}
              </p>
              {projectSummary && (
                <div className="mt-14 lg:mt-0 gap-x-11 lg:gap-x-0 lg:max-w-[528px] flex flex-row justify-start items-start">
                  <div className="gap-y-2 lg:gap-y-6 flex-1 flex flex-col justify-start items-start">
                    <div className="w-12 h-1 bg-green-tag" />
                    <span className="mt-2 lg:mt-0 block text-6xl lg:text-8xl font-medium">
                      {projectSummary.totalProjects}
                    </span>
                    <span className="block text-sm lg:text-base text-secondary uppercase">
                      {l(locale, localizations, 'general.active-sites')}
                    </span>
                  </div>
                  <div className="gap-y-2 lg:gap-y-6 flex-1 flex flex-col justify-start items-start">
                    <div className="w-12 h-1 bg-cta-primary" />
                    <span className="mt-2 lg:mt-0 block text-6xl lg:text-8xl font-medium">
                      {totalCapacitiesText}
                    </span>
                    <span className="block text-sm lg:text-base text-secondary uppercase">
                      {totalCapacitiesText}{' '}
                      {l(locale, localizations, 'general.megawatts')}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="lg:flex-1 lg:flex-shrink-0 flex flex-col justify-center items-center">
            <img
              className="w-full lg:w-[310px]"
              alt="Map"
              src={p('mock/front/section-impact/mock-map.png')}
            />
          </div>
        </div>
        <span className="block text-lg lg:text-2xl text-cta-primary font-semibold text-center">
          {l(locale, localizations, 'front.more-to-come')}
        </span>
      </div>
    </section>
  );
};

export default SectionImpact;
