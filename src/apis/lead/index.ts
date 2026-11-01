import axios from 'axios';

import { apiKey, apiPrefix } from '../../config/constants';

export const submitLead = async (form: FormData): Promise<void> => {
  await axios.post(`${apiPrefix}/submit-lead`, form, {
    headers: { apiKey },
  });
};
