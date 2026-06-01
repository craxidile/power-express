import axios from 'axios';

import { Contact } from '../../models/contact';
import { apiKey, apiPrefix } from '../../config/constants';

export const listContacts = async (): Promise<Contact[]> => {
  // return Promise.resolve(mockPartners);
  const response = await axios.get<Contact[]>(
    `${apiPrefix}/list-all-contacts`,
    {
      headers: { apiKey },
    }
  );
  const { data } = response;
  return data;
};
