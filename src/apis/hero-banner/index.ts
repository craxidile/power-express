import axios from 'axios';

import { apiKey, apiPrefix } from '../../config/constants';
import { HeroBanner } from '../../models/hero-banner';
// import mockHeroBanners from './mock/hero-banners';

export const listHeroBanners = async (): Promise<HeroBanner[] | null> => {
  // return mockHeroBanners;
  const response = await axios.get<HeroBanner[]>(
    `${apiPrefix}/list-all-hero-banners`,
    {
      headers: { apiKey },
    }
  );
  const { data } = response;
  return data;
};
