import axios from 'axios';

import { Partner } from '../../models/partner';
import { apiKey, apiPrefix } from '../../config/constants';
// import mockPartners from './mock/partners';

export const listPartners = async (): Promise<Partner[]> => {
  // return Promise.resolve(mockPartners);
  const response = await axios.get<Partner[]>(
    `${apiPrefix}/list-all-partners`,
    {
      headers: { apiKey },
    }
  );
  const { data } = response;
  return data;
};
