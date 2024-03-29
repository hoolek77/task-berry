import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RouteComponentProps, useHistory, withRouter } from 'react-router-dom';
import { ReactComponent as Home } from 'assets/Home.svg';
import { ReactComponent as Logout } from 'assets/Logout.svg';
import { ReactComponent as Settings } from 'assets/Settings.svg';
import { HamburgerMenu } from 'components/HamburgerMenu';
import { useUser } from 'hooks';
import { useTheme } from 'styled-components';
import { ThemeContentType } from 'styles/theme';

import { MenuContainer, NavigationItem, NavigationPanel, UserInfo } from './styles';

interface Props extends RouteComponentProps {
  name: string;
}

const MenuComponent = ({ name, location }: Props) => {
  const { t } = useTranslation();
  const history = useHistory();
  const theme = useTheme() as ThemeContentType;
  const { signOut } = useUser();
  const [isMenu, setIsMenu] = useState(false);

  const checkRoute = (pathname: string) => {
    const pathnameSplitted = location.pathname.split('/');
    const isActive = pathname === pathnameSplitted[1];
    return isActive;
  };

  const logOut = () => {
    signOut();
    history.push('/');
  };

  return (
    <>
      <MenuContainer>
        <span>TASK</span>
        <span>BERRY</span>
        <NavigationPanel>
          <NavigationItem to="/home" $isActive={checkRoute('home')}>
            <Home fill={theme.fontPrimary} />
          </NavigationItem>
          <NavigationItem to="/settings" $isActive={checkRoute('settings')}>
            <Settings fill={theme.fontPrimary} />
          </NavigationItem>
        </NavigationPanel>
        <Logout onClick={logOut} />
      </MenuContainer>

      <HamburgerMenu isMenu={isMenu} setIsMenu={setIsMenu}>
        <NavigationPanel>
          <NavigationItem to="/home" $isActive={checkRoute('home')} onClick={() => setIsMenu(false)}>
            <Home fill={theme.fontPrimary} />
          </NavigationItem>
          <NavigationItem to="/settings" $isActive={checkRoute('settings')} onClick={() => setIsMenu(false)}>
            <Settings fill={theme.fontPrimary} />
          </NavigationItem>
        </NavigationPanel>
        <Logout onClick={logOut} style={{ position: 'absolute', bottom: '30px' }} />
      </HamburgerMenu>
      <UserInfo>{t('home.menu.userInfo', { name })}</UserInfo>
    </>
  );
};

const Menu = withRouter(MenuComponent);

export { Menu };
