import dayjs from 'dayjs';
import buddhistEra from 'dayjs/plugin/buddhistEra';
import 'dayjs/locale/th';

import { LocaleKey } from '../models/_commons/localized';

dayjs.extend(buddhistEra);

export const localizedDate = (
  locale: LocaleKey,
  dateText: string | undefined
): string => {
  let date = dayjs(dateText);
  return locale === 'th'
    ? date.locale('th').format('D MMM BBBB')
    : date.format('D MMM YYYY');
};
