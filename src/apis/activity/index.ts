import { Activity } from '../../models/activity';
import mockActivities from './mock/activities';

export const listLatestActivities = async (): Promise<Activity[]> => {
  return Promise.resolve(mockActivities.slice(0, 3));
};

export const listActivities = async (): Promise<Activity[]> => {
  return Promise.resolve(mockActivities);
};

export const findActivityById = async (
  id: number
): Promise<Activity | null> => {
  return Promise.resolve(mockActivities.find((p) => p.id === id) ?? null);
};
