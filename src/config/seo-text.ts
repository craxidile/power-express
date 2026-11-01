import seoData from './seo-text.json';
import { Locale } from '../models/_commons/localized';

type PageText = { [key in Locale]: { title: string; description: string } };

export const seoText = seoData as { [page: string]: PageText };


export const stripText = (text: string, max = 160): string => {
  const plain = text
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  return plain.length > max ? `${plain.slice(0, max - 1)}…` : plain;
};
