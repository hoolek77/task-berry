import React from 'react';
import { useTranslation } from 'react-i18next';
import { useTasks } from 'hooks';

import { LabelMenuContainer, LabelMenuItem } from './styles';

export const LabelMenu = () => {
  const { t } = useTranslation();
  const { labels } = useTasks();

  const isActive = (label: string) => {
    return window.location.pathname === `/tasks/${label}`;
  };

  return (
    <>
      <LabelMenuContainer>
        <LabelMenuItem to="/home" isActive={window.location.pathname === '/home'}>
          {t('labelMenu.all')}
        </LabelMenuItem>
        {labels.map((label) => (
          <LabelMenuItem to={`/tasks/${label}`} isActive={isActive(label)}>
            {label}
          </LabelMenuItem>
        ))}
      </LabelMenuContainer>
    </>
  );
};
