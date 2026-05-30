import axios from 'axios';

import { Activity } from '../../models/activity';
import { apiKey, apiPrefix } from '../../config/constants';
// import mockActivities from './mock/activities';

export const listLatestActivities = async (): Promise<Activity[]> => {
  // return Promise.resolve(mockActivities.slice(0, 3));
  const response = await axios.get<Activity[]>(
    `${apiPrefix}/list-latest-activities`,
    {
      headers: { apiKey },
    }
  );
  const { data } = response;
  return data;
};

export const listActivities = async (): Promise<Activity[]> => {
  // return Promise.resolve(mockActivities);
  const response = await axios.get<Activity[]>(
    `${apiPrefix}/list-all-activities`,
    {
      headers: { apiKey },
    }
  );
  const { data } = response;
  return data;
};

export const findActivityById = async (
  id: number
): Promise<Activity | null> => {
  // return Promise.resolve(mockActivities.find((p) => p.id === id) ?? null);
  const response = await axios.get<Activity | null>(
    `${apiPrefix}/find-activity-by-id?id=${id}`,
    {
      headers: { apiKey },
    }
  );
  const { data } = response;
  return data;
};
