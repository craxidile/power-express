import axios from 'axios';

import { Benefit } from '../../models/benefit';
import { apiKey, apiPrefix } from '../../config/constants';
// import mockBenefits from './mock/benefits';

export const listBenefits = async (): Promise<Benefit[]> => {
  // return Promise.resolve(mockBenefits);
  const response = await axios.get<Benefit[]>(
    `${apiPrefix}/list-all-benefits`,
    {
      headers: { apiKey },
    }
  );
  const { data } = response;
  return data;
};
