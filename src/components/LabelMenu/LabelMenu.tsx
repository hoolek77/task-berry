import React from 'react';
import { useTranslation } from 'react-i18next';
import { useTasks } from 'hooks';

import { LabelMenuContainer, LabelMenuItem } from './styles';

export const LabelMenu = () => {
  const { t } = useTranslation();
  const { labels } = useTasks();

  const isActive = (label: string) => {
    return window.location.pathname === `/home/${label}`;
  };

  return (
    <>
      <LabelMenuContainer>
        <LabelMenuItem to="/home" $isActive={window.location.pathname === '/home'}>
          {t('home.labelMenu.all')}
        </LabelMenuItem>
        {labels.map((label) => (
          <LabelMenuItem to={`/home/${label}`} $isActive={isActive(label)} key={label}>
            {label}
          </LabelMenuItem>
        ))}
      </LabelMenuContainer>
    </>
  );
};
