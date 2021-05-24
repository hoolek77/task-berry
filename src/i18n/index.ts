import { initReactI18next } from 'react-i18next';
import { LS_LANGUAGE } from 'constants/language';
import i18n from 'i18next';
import { isLanguage } from 'utils';

import { en } from './en';
import { pl } from './pl';

const LANGUAGE = localStorage.getItem(LS_LANGUAGE);

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    pl: { translation: pl },
  },
  lng: isLanguage(LANGUAGE) ? LANGUAGE : 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

export default i18n;
