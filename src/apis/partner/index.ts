import { Partner } from '../../models/partner';
import mockPartners from './mock/partners';

export const listPartners = async (): Promise<Partner[]> => {
  return Promise.resolve(mockPartners);
};
