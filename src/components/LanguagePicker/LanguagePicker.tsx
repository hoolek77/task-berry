import React, { useEffect, useState } from 'react';
import { LS_LANGUAGE } from 'constants/language';
import i18n from 'i18n';
import { LanguageType } from 'models';
import { isLanguage } from 'utils';

import { LanguageContainer, StyledPolishFlag as PolishFlag, StyledUKFlag as UKFlag } from './styles';

export const LanguagePicker = () => {
  const LANGUAGE = localStorage.getItem(LS_LANGUAGE);
  const [language, setLanguage] = useState<LanguageType>(isLanguage(LANGUAGE) ? LANGUAGE : 'en');

  useEffect(() => {
    i18n.changeLanguage(language);
    localStorage.setItem(LS_LANGUAGE, language);
  }, [language]);

  return (
    <LanguageContainer>
      <UKFlag width="70px" height="35px" onClick={() => setLanguage('en')} />
      <PolishFlag width="70px" height="35px" onClick={() => setLanguage('pl')} />
    </LanguageContainer>
  );
};
