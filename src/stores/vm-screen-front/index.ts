import { useCallback } from 'react';
import {atom, useAtom} from "jotai";

import {Benefit} from "../../models/benefit";
import {HeroBanner} from "../../models/hero-banner";
import {listHeroBanners} from "../../apis/hero-banner";
import {listBenefits} from "../../apis/benefit";

const benefitsState = atom<Benefit[]>([]);
const heroBannersState = atom<HeroBanner[]>([]);

export interface IVmScreenFront {
  // Observables;
  benefits?: Benefit[];
  heroBanners?: HeroBanner[];
  // Actions
  bind?: () => void;
}

const store: IVmScreenFront = {};

export const useVmScreenFront = (): IVmScreenFront => {
  const [benefits, setBenefits] = useAtom(benefitsState);
  const [heroBanners, setHeroBanners] = useAtom(heroBannersState);

  const bind = useCallback(() => {
    (async () => {
      await Promise.all([
        new Promise(async (resolve, reject) => {
          try {
            const benefits = await listBenefits();
            setBenefits(benefits ?? []);
            resolve(benefits);
          } catch (error) {
            console.log('>>error<< list_benefits', error);
            reject(error);
          }
        }),
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
  }, [setBenefits, setHeroBanners]);

  // Observables
  store.benefits = benefits;
  store.heroBanners = heroBanners;

  // Actions
  store.bind = bind;

  return store;
}
