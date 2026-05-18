import {HeroBanner} from "../../models/hero-banner";
import mockHeroBanners from './mock/hero-banners';

export const listHeroBanners = async (): Promise<HeroBanner[] | null> => {
  return mockHeroBanners;
};
