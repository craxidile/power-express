import { Benefit } from '../../models/benefit';
import mockBenefits from './mock/benefits';

export const listBenefits = async (): Promise<Benefit[]> => {
  return Promise.resolve(mockBenefits);
};
