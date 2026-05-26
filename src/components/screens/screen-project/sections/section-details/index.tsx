import { useMemo } from 'react';

import { useVmScreen } from '../../../../../stores/vm-screen';
import { useVmScreenProject } from '../../../../../stores/vm-screen-project';
import SectionTwoCols from '../../../../sections/section-two-cols';
import ContentTitle from '../../../../_commons/content-title';
import ContentItem from '../../../../_commons/content-item';
import PhotoGallery from '../../../../_commons/photo-gallery';
import { p } from '../../../../../utils/path-utils';

const SectionDetails = () => {
  const vmScreen = useVmScreen();
  const { locale = 'th' } = vmScreen;

  const vmScreenProject = useVmScreenProject();
  const { project } = vmScreenProject;

  const {
    title,
    location,
    client,
    capacity,
    details,
    completion,
    energy,
    treesPlanted,
    photos = [],
  } = project || {};

  const localizedTitle = useMemo(
    () => (title ? title[locale] : ''),
    [locale, title]
  );

  const localizedClient = useMemo(
    () => (client ? client[locale] : ''),
    [locale, client]
  );

  const localizedLocation = useMemo(
    () => (location ? location[locale] : ''),
    [locale, location]
  );

  const localizedDetails = useMemo(
    () => (details ? details[locale] : ''),
    [locale, details]
  );

  const screenTitle = useMemo(() => {
    return (
      <ContentTitle
        caption="Project"
        title={localizedTitle}
        subtitle={`${capacity} kW Solar Array`}
      />
    );
  }, [capacity, localizedTitle]);

  const colEnd = useMemo(() => {
    return (
      <div className="flex flex-col justify-start items-stretch">
        <ul className="flex flex-col justify-start items-stretch">
          <li>
            <ContentItem isCta title="กำลังการผลิต" text={`${capacity} kW`} />
            <ContentItem title="สถานที่" text={`${localizedLocation}`} />
            <ContentItem title="ลูกค้า" text={localizedClient} />
            <ContentItem title="ปีที่แล้วเสร็จ" text={`${completion ?? 0}`} />
          </li>
        </ul>
        <div className="gap-y-4 flex flex-col justify-start items-stretch">
          <div className="p-10 gap-x-6 flex flex-row justify-center items-center rounded-3xl bg-pale">
            <div className="w-12 h-12 lg:w-[100px] lg:h-[100px] flex flex-col justify-center items-center bg-white rounded-full">
              <img
                className="w-6 lg:w-10 h-auto"
                alt="Energy"
                src={p('mock/project/section-details/ic-energy.svg')}
              />
            </div>
            <div className="gap-y-2 lg:gap-y-4 lg:min-w-60 flex flex-col justify-start items-start">
              <span className="text-title-pale text-sm lg:text-base">
                Energy Production
              </span>
              <div className="gap-x-2 inline-flex flex-row justify-start items-end">
                <span className="text-4xl lg:text-5xl font-medium leading-none">
                  {(energy ?? 0).toLocaleString()}
                </span>
                <span className="text-sm lg:text-base text-gray-dark">kWh</span>
              </div>
            </div>
          </div>
          <div className="p-10 gap-y-4 flex flex-col justify-start items-stretch rounded-3xl bg-pale">
            <p className="text-base lg:text-2xl text-title-pale text-center">
              Equivalent
              <br />
              Trees Planted
            </p>
            <span className="text-center text-4xl lg:text-5xl font-medium leading-none">
              {(treesPlanted ?? 0).toLocaleString()}
            </span>
            <img
              alt="Environment"
              src={p('mock/project/section-details/environment.png')}
            />
          </div>
        </div>
      </div>
    );
  }, [
    capacity,
    completion,
    localizedClient,
    localizedLocation,
    energy,
    treesPlanted,
  ]);

  return (
    <div className="pt-20 pb-16 flex flex-col justify-start items-stretch">
      <SectionTwoCols title={screenTitle} colEnd={colEnd}>
        <div className="gap-y-16 flex flex-col flex-start items-stretch">
          <p className="text-gray-content text-base lg:text-lg">
            {localizedDetails}
          </p>
          <PhotoGallery photos={photos} />
        </div>
      </SectionTwoCols>
    </div>
  );
};

export default SectionDetails;
