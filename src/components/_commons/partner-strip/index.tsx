import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

import { Partner } from '../../../models/partner';
import { PropsWithChildren, useCallback } from 'react';
import { Locale } from '../../../models/_commons/localized';

export interface PartnerStripProps {
  locale?: Locale;
  partners: Partner[];
}

const AUTOPLAY_DELAY = 5000;
const ITEMS_PER_CARD = 5;

const PartnerStrip = (props: PropsWithChildren<PartnerStripProps>) => {
  const { locale = 'th', partners } = props;

  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: AUTOPLAY_DELAY, stopOnInteraction: false }),
  ]);

  const createPartnerList = useCallback(
    (partners: Partner[]) => {
      return (
        <ul
          className={`embla__slide w-full gap-6 grid grid-cols-${ITEMS_PER_CARD}`}
        >
          {partners.map((partner) => {
            const { id, name, logo } = partner;
            const localizedName = name ? name[locale] : '';
            return (
              <li key={id}>
                <img
                  className="block"
                  alt={localizedName}
                  title={localizedName}
                  src={logo}
                />
              </li>
            );
          })}
        </ul>
      );
    },
    [locale]
  );

  return partners.length <= ITEMS_PER_CARD ? (
    createPartnerList(partners)
  ) : (
    <div className="embla z-[1] relative mx-auto h-full w-full flex flex-justify-start items-stretch">
      <div
        ref={emblaRef}
        className="embla__viewport overflow-hidden flex-1 w-full h-full"
      >
        <div className="embla__container flex">
          {[...Array(Math.ceil(partners.length / ITEMS_PER_CARD))].map(
            (_, index) => {
              const start = index * ITEMS_PER_CARD;
              return createPartnerList(
                partners.slice(start, start + ITEMS_PER_CARD)
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default PartnerStrip;
