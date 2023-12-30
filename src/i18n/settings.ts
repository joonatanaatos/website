import type { InitOptions } from 'i18next';

export const fallbackLng = 'fi';
export const locales = [fallbackLng, 'en', 'sv'] as const;
export const localeNames = {
  fi: '🇫🇮 Suomi',
  en: '🇬🇧 English',
  sv: '🇸🇪 Svenska',
} as const;
export type LocaleTypes = (typeof locales)[number];
export const defaultNS = 'common';

export function getOptions(lang = fallbackLng, ns = defaultNS): InitOptions {
  return {
    // debug: true,
    supportedLngs: locales,
    fallbackLng,
    lng: lang,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
