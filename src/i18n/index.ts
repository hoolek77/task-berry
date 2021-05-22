import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

import { en } from './en';
import { pl } from './pl';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    pl: { translation: pl },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

export default i18n;
