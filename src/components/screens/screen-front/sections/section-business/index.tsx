import useEmblaCarousel from 'embla-carousel-react'

import {HeroBanner} from "../../../../../models/hero-banner";
import BusinessBanner from "../../../../_commons/business-banner";
import {useVmScreenFront} from "../../../../../stores/vm-screen-front";

const SectionBusiness = () => {
  const vmScreenFront = useVmScreenFront();
  const {heroBanners = []} = vmScreenFront;

  const [emblaRef] = useEmblaCarousel();

  if (!heroBanners?.length) return null;
  return (
    <section className="relative h-screen lg:min-h-[900px] bg-gray-100 flex flex-col justify-start items-stretch">
      <h2
        className="z-[3] absolute left-0 top-0 w-full py-10 lg:pt-[160px] text-center text-white text-sm lg:text-2xl font-medium">
        ธุรกิจของเรา
      </h2>
      <div className="embla z-[1] relative mx-auto h-full w-full flex flex-justify-start items-stretch">
        <div className="embla__viewport overflow-hidden flex-1 w-full h-full" ref={emblaRef}>
          <div className="embla__container flex">
            {heroBanners.map((heroBanner: HeroBanner) => {
              const {id} = heroBanner;
              return <BusinessBanner key={id} heroBanner={heroBanner}/>;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionBusiness;
