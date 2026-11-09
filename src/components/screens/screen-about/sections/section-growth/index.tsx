import { useMemo } from 'react';
import { p } from '../../../../../utils/path-utils';

import { l } from '../../../../../utils/localization-utils';
import { m } from '../../../../../utils/media-utils';
import { useVmScreen } from '../../../../../stores/vm-screen';
import { useVmScreenAbout } from '../../../../../stores/vm-screen-about';
import StatRow, { StatRowTheme } from '../../../../_commons/stat-row';
import StatBox, { StatBoxTheme } from '../../../../_commons/stat-box';
import ThailandMap from '../../../../_commons/thailand-map';
import {
  customMapUrl,
  provinceNames,
  useProvinceIds,
} from '../../../../../utils/use-provinces';

// Same automatic map as the home page, in green. A picture uploaded to Site Images
// (about.figure-map) still wins; while that slot holds the original image, we draw the map.
const ORIGINAL_MAP = 'media/about/map.png';
const MAP_GREEN = '#2D5A3D';

const mapAlt = (locale: string, names: string[]) =>
  locale === 'en'
    ? `Map of Thailand; provinces with our sites are shown in green: ${names.join(', ')}`
    : `แผนที่ประเทศไทย จังหวัดที่มีโครงการแสดงเป็นสีเขียว: ${names.join(', ')}`;

const SectionGrowth = () => {
  const { locale = 'th', localizations = [], media } = useVmScreen();
  const provinceIds = useProvinceIds();
  const customMap = customMapUrl(m(media, 'about.figure-map'), ORIGINAL_MAP);
  const mapLabel = mapAlt(locale, provinceNames(provinceIds, locale));

  const { projectSummary } = useVmScreenAbout();
  const { totalProjects, totalCapacities } = projectSummary ?? {};

  const totalCapacitiesText = useMemo(
    () => (totalCapacities ?? 0).toFixed(2),
    [totalCapacities]
  );

  if (!projectSummary) return null;
  return (
    <section className="bg-pale py-20 flex flex-col justify-start items-stretch">
      <div className="w-full max-w-[1466] gap-y-10 px-6 max-auto flex flex-col justify-start items-stretch">
        <h2 className="text-title-light font-medium text-sm lg:text-2xl text-center uppercase">
          {l(locale, localizations, 'about.title-impact')}
        </h2>
        <div className="gap-y-16 lg:gap-y-0 lg:gap-x-4 flex flex-col lg:flex-row justify-start items-stretch">
          <div className="gap-y-16 lg:gap-y-20 flex-1 flex-shrink-0 flex flex-col justify-start items-center">
            <ul className="gap-y-16 lg:gap-y-0 mx-auto w-full max-w-[656px] flex flex-col lg:flex-row justify-start lg:justify-between items-center lg:items-start">
              <li>
                <StatBox
                  icon={p('mock/about/section-growth/ic-pin.svg')}
                  value={`${totalProjects}`}
                  title={l(locale, localizations, 'general.active-sites')}
                  theme={StatBoxTheme.secondary}
                />
              </li>
              <li>
                <StatBox
                  icon={p('mock/about/section-growth/ic-watt.svg')}
                  value={totalCapacitiesText}
                  title={l(locale, localizations, 'general.total-capacities')}
                  theme={StatBoxTheme.primary}
                />
              </li>
            </ul>
            <ul className="mx-auto w-full max-w-[340px] lg:max-w-[528px] gap-y-12 flex flex-col justify-start items-stretch">
              <li>
                <StatRow
                  theme={StatRowTheme.secondary}
                  icon={p('mock/about/section-growth/ic-growth.svg')}
                  value={l(locale, localizations, 'about.qty-success-rate')}
                  title={l(locale, localizations, 'about.title-success-rate')}
                  excerpt={l(
                    locale,
                    localizations,
                    'about.excerpt-success-rate'
                  )}
                />
              </li>
              <li>
                <StatRow
                  theme={StatRowTheme.primary}
                  icon={p('mock/about/section-growth/ic-medal.svg')}
                  value={l(locale, localizations, 'about.qty-experience')}
                  title={l(locale, localizations, 'about.title-experience')}
                  excerpt={l(locale, localizations, 'about.excerpt-experience')}
                />
              </li>
              <li>
                <StatRow
                  theme={StatRowTheme.secondary}
                  icon={p('mock/about/section-growth/ic-growth.svg')}
                  value={l(locale, localizations, 'about.qty-output')}
                  title={l(locale, localizations, 'about.title-output')}
                  excerpt={l(locale, localizations, 'about.excerpt-output')}
                />
              </li>
            </ul>
          </div>
          <div className="flex-1 flex-shrink-0 flex flex-col justify-center items-center">
            {customMap ? (
              <img
                loading="lazy"
                decoding="async"
                className="w-[404px] h-auto"
                alt={mapLabel}
                src={customMap}
              />
            ) : (
              <ThailandMap
                className="w-[404px] h-auto"
                highlighted={provinceIds}
                color={MAP_GREEN}
                locale={locale}
                label={mapLabel}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionGrowth;
