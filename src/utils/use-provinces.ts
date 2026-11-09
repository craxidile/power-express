import { useEffect, useState } from 'react';

import { FALLBACK_PROVINCE_IDS, fetchProvinceIds } from '../apis/province';
import { provinceById } from './province-utils';

/** Province ids that have a project; the bundled list first, then the live one. */
export const useProvinceIds = (): string[] => {
  const [ids, setIds] = useState<string[]>(FALLBACK_PROVINCE_IDS);
  useEffect(() => {
    let alive = true;
    fetchProvinceIds().then((live) => {
      if (alive && live) setIds(live);
    });
    return () => {
      alive = false;
    };
  }, []);
  return ids;
};

/** Province names in the page language, alphabetical, for captions and screen-reader text. */
export const provinceNames = (ids: string[], locale: string): string[] =>
  ids
    .map((id) => provinceById(id))
    .filter((p): p is NonNullable<typeof p> => !!p)
    .map((p) => (locale === 'en' ? p.en : p.th))
    .sort((a, b) => a.localeCompare(b, locale === 'en' ? 'en' : 'th'));

/**
 * The picture the team uploaded in Site Images to replace the default map, or null while the slot
 * still holds the original image (or nothing loaded yet). Null means: draw the automatic map.
 */
export const customMapUrl = (
  url: string | undefined,
  originalSuffix: string
): string | null => {
  if (!url || url.startsWith('data:') || url.endsWith(originalSuffix))
    return null;
  return url;
};
