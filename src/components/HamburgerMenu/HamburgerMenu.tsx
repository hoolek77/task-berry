import React, { Dispatch, ReactNode, SetStateAction } from 'react';
import { PopupOverlay } from 'components/PopupOverlay';

import { HamburgerIcon, HamburgerMenuContainer } from './styles';

interface Props extends React.ComponentPropsWithoutRef<'button'> {
  isMenu: boolean;
  children: ReactNode;
  setIsMenu: Dispatch<SetStateAction<boolean>>;
}

const HamburgerMenu = ({ children, isMenu, setIsMenu }: Props) => {
  return (
    <>
      <HamburgerIcon isMenu={isMenu} onClick={() => setIsMenu((prev) => !prev)}>
        <div />
        <div />
        <div />
      </HamburgerIcon>
      <HamburgerMenuContainer isMenu={isMenu}>{children}</HamburgerMenuContainer>
      {isMenu && <PopupOverlay onClick={() => setIsMenu(!isMenu)} />}
    </>
  );
};

export { HamburgerMenu };
