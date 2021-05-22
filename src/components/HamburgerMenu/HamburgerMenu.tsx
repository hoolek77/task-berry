import React, { Dispatch, ReactNode, SetStateAction } from 'react';
import { PopupOverlay } from 'components/PopupOverlay';
import { useTheme } from 'hooks';

import { HamburgerIcon, HamburgerMenuContainer } from './styles';

interface Props extends React.ComponentPropsWithoutRef<'button'> {
  isMenu: boolean;
  children: ReactNode;
  setIsMenu: Dispatch<SetStateAction<boolean>>;
}

const HamburgerMenu = ({ children, isMenu, setIsMenu }: Props) => {
  const { isDarkTheme } = useTheme();

  return (
    <>
      <HamburgerIcon isDarkTheme={isDarkTheme()} isMenu={isMenu} onClick={() => setIsMenu((prev) => !prev)}>
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
