import axios from 'axios';

import { Media } from '../../models/media';
import { apiKey, apiPrefix } from '../../config/constants';

export const listMedia = async (): Promise<Media[]> => {
  // return Promise.resolve(mockLocalizations);

  const response = await axios.get<Media[]>(`${apiPrefix}/list-all-media`, {
    headers: { apiKey },
  });
  const { data } = response;
  return data;
};
