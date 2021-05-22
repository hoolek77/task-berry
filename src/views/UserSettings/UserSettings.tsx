import React from 'react';
import { useTranslation } from 'react-i18next';
import { Switch } from '@material-ui/core';
import { PageWrapper } from 'components';
import { useTheme } from 'hooks';

import { Setting, SettingsHeader, SettingsWrapper, SwitchWrapper } from './styles';

const UserSettings = () => {
  const { t } = useTranslation();
  const { theme, switchTheme } = useTheme();

  return (
    <PageWrapper>
      <SettingsHeader>{t('settings.header')}</SettingsHeader>
      <SettingsWrapper>
        <Setting>
          {t('settings.colorScheme')}
          <SwitchWrapper>
            {t('settings.dark')}
            <Switch checked={theme === 'light'} onChange={switchTheme} color="primary" />
            {t('settings.light')}
          </SwitchWrapper>
        </Setting>
      </SettingsWrapper>
    </PageWrapper>
  );
};

export { UserSettings };
