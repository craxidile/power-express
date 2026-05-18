import { useCallback } from 'react';
import {atom, useAtom} from "jotai";

import {HeroBanner} from "../../models/hero-banner";
import {listHeroBanners} from "../../apis/hero-banner";

const heroBannersState = atom<HeroBanner[]>([]);

export interface IVmScreenFront {
  // Observables;
  heroBanners?: HeroBanner[];
  // Actions
  bind?: () => void;
}

const store: IVmScreenFront = {};

export const useVmScreenFront = (): IVmScreenFront => {
  const [heroBanners, setHeroBanners] = useAtom(heroBannersState);

  const bind = useCallback(() => {
    (async () => {
      await Promise.all([
        new Promise(async (resolve, reject) => {
          try {
            const heroBanners = await listHeroBanners();
            setHeroBanners(heroBanners ?? []);
            resolve(heroBanners);
          } catch (error) {
            console.log('>>error<< list_hero_banners', error);
            reject(error);
          }
        }),
      ]);
    })();
  }, [setHeroBanners]);

  // Observables
  store.heroBanners = heroBanners;

  // Actions
  store.bind = bind;

  return store;
}
