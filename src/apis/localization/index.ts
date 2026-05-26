import { LocalizedKeyText } from '../../models/_commons/localized';
import mockLocalizations from './mock/localizations';

export const listLocalizations = async (): Promise<LocalizedKeyText[]> => {
  return Promise.resolve(mockLocalizations);
};
