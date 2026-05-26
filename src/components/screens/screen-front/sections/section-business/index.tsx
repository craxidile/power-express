import { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

import { HeroBanner } from '../../../../../models/hero-banner';
import { l } from '../../../../../utils/localization-utils';
import { useVmScreenFront } from '../../../../../stores/vm-screen-front';
import { useVmScreen } from '../../../../../stores/vm-screen';
import BusinessBanner from '../../../../_commons/business-banner';

const SectionBusiness = () => {
  const { locale = 'th', localizations = [] } = useVmScreen();

  const vmScreenFront = useVmScreenFront();
  const { heroBanners = [] } = vmScreenFront;

  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setCurrentIndex(emblaApi?.selectedScrollSnap());
    };
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  if (!heroBanners?.length) return null;
  return (
    <section className="relative h-screen lg:min-h-[900px] bg-gray-100 flex flex-col justify-start items-stretch">
      <h2 className="z-[3] absolute left-0 top-0 w-full py-10 lg:pt-[160px] text-center text-white text-sm lg:text-2xl font-medium uppercase">
        {l(locale, localizations, 'front.title-business')}
      </h2>
      <div className="embla z-[1] relative mx-auto h-full w-full flex flex-justify-start items-stretch">
        <div
          className="embla__viewport overflow-hidden flex-1 w-full h-full"
          ref={emblaRef}
        >
          <div className="embla__container flex">
            {heroBanners.map((heroBanner: HeroBanner) => {
              const { id } = heroBanner;
              return (
                <BusinessBanner
                  key={id}
                  locale={locale}
                  heroBanner={heroBanner}
                />
              );
            })}
          </div>
        </div>
        <ul className="absolute left-0 bottom-10 lg:bottom-20 w-full gap-x-3 flex flex-row justify-center items-center">
          {heroBanners.map((heroBanner: HeroBanner, index: number) => {
            const { id } = heroBanner;
            return (
              <li key={id} className="relative w-2 h-2">
                <button
                  className={`w-full h-full  rounded-full ${currentIndex !== index ? 'bg-white-a20' : 'bg-white'}`}
                  onClick={() => emblaApi?.scrollTo(index)}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default SectionBusiness;
