import React, { useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { ReactComponent as Home } from 'assets/Home.svg';
import { ReactComponent as Logout } from 'assets/Logout.svg';
import { ReactComponent as Settings } from 'assets/Settings.svg';
import { HamburgerMenu } from 'components/HamburgerMenu';
import { useTasks } from 'hooks';

import { MenuContainer, NavigationItem, NavigationPanel, UserInfo } from './styles';

interface Props extends RouteComponentProps {
  name: string;
}

const MenuComponent = ({ name, location }: Props) => {
  const { signOut } = useTasks();
  const [isMenu, setIsMenu] = useState(false);

  const checkRoute = (pathname: string) => {
    const isActive = location.pathname === pathname;
    return isActive;
  };

  return (
    <>
      <MenuContainer>
        <span>TASK</span>
        <span>BERRY</span>
        <NavigationPanel>
          <NavigationItem to="/home" isActive={checkRoute('/home')}>
            <Home />
          </NavigationItem>
          <NavigationItem to="/settings" isActive={checkRoute('/settings')}>
            <Settings />
          </NavigationItem>
        </NavigationPanel>
        <Logout onClick={signOut} />
      </MenuContainer>

      <HamburgerMenu isMenu={isMenu} setIsMenu={setIsMenu}>
        <NavigationPanel>
          <NavigationItem to="/home" isActive={checkRoute('/home')} onClick={() => setIsMenu(false)}>
            <Home />
          </NavigationItem>
          <NavigationItem to="/settings" isActive={checkRoute('/settings')} onClick={() => setIsMenu(false)}>
            <Settings />
          </NavigationItem>
        </NavigationPanel>
        <Logout onClick={signOut} style={{ position: 'absolute', bottom: '30px' }} />
      </HamburgerMenu>
      <UserInfo>Hi there, {name}</UserInfo>
    </>
  );
};

const Menu = withRouter(MenuComponent);

export { Menu };
