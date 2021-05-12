import React, { ReactNode } from 'react';

import { PopupContainer } from './styles';

interface Props {
  children: ReactNode;
  height: string;
  width: string;
}

export const Popup = ({ children, height, width }: Props) => {
  return (
    <>
      <PopupContainer style={{ width, height }}>{children}</PopupContainer>
    </>
  );
};
