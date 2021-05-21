import React from 'react';
import { useTasks } from 'hooks';

import { LabelMenuContainer, LabelMenuItem } from './styles';

export const LabelMenu = () => {
  const { labels } = useTasks();

  const isActive = (label: string) => {
    return window.location.pathname === `/tasks/${label}`;
  };

  return (
    <>
      <LabelMenuContainer>
        <LabelMenuItem to="/home" isActive={window.location.pathname === '/home'}>
          All
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
