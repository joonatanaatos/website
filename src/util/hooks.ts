import { useParams } from 'next/navigation';
import { LocaleTypes } from '@/i18n/settings';

export const useLocale = () => {
  const { locale } = useParams();
  return locale as LocaleTypes;
};
