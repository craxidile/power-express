import axios from 'axios';

import { LocalizedKeyText } from '../../models/_commons/localized';
import { apiKey, apiPrefix } from '../../config/constants';
// import mockLocalizations from './mock/localizations';

export const listLocalizations = async (): Promise<LocalizedKeyText[]> => {
  // return Promise.resolve(mockLocalizations);

  const response = await axios.get<LocalizedKeyText[]>(
    `${apiPrefix}/list-all-localizations`,
    {
      headers: { apiKey },
    }
  );
  const { data } = response;
  return data;
};
