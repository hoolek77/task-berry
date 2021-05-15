import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { ReactComponent as Home } from 'assets/Home.svg';
import { ReactComponent as Logout } from 'assets/Logout.svg';
import { ReactComponent as Settings } from 'assets/Settings.svg';
import { useTasks } from 'hooks';

import { MenuContainer, NavigationItem, NavigationPanel, UserInfo } from './styles';

interface Props extends RouteComponentProps {
  name: string;
}

const MenuComponent = ({ name, location }: Props) => {
  const { signOut } = useTasks();

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
          <NavigationItem to="/home" isactive={checkRoute('/home')}>
            <Home />
          </NavigationItem>
          <NavigationItem to="/settings" isactive={checkRoute('/settings')}>
            <Settings />
          </NavigationItem>
        </NavigationPanel>
        <Logout onClick={signOut} />
      </MenuContainer>
      <UserInfo>Hi there, {name}</UserInfo>
    </>
  );
};

const Menu = withRouter(MenuComponent);

export { Menu };
