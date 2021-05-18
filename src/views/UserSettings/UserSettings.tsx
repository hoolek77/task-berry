import React from 'react';
import { Switch } from '@material-ui/core';
import { PageWrapper } from 'components';
import { useTheme } from 'hooks';

import { Setting, SettingsHeader, SettingsWrapper, SwitchWrapper } from './styles';

const UserSettings = () => {
  const { theme, switchTheme } = useTheme();

  return (
    <PageWrapper>
      <SettingsHeader>Settings</SettingsHeader>
      <SettingsWrapper>
        <Setting>
          Color Scheme:
          <SwitchWrapper>
            Dark
            <Switch checked={theme === 'light'} onChange={switchTheme} color="primary" />
            Light
          </SwitchWrapper>
        </Setting>
      </SettingsWrapper>
    </PageWrapper>
  );
};

export { UserSettings };
