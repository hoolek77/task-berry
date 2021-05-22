import { LanguageType } from 'models';

export const isLanguage = (language: string | null): language is LanguageType => {
  return language === 'en' || language === 'pl';
};
