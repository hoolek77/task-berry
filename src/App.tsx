import { FC } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { LandingRoute, Menu, Notification, ProtectedRoute } from 'components';
import { RootState } from 'store';
import { InitialUserState } from 'store/reducers/user';
import { Home, Landing, UserSettings } from 'views';
import { NotFound } from 'views/NotFound';

const App: FC = () => {
  const { accessToken, name } = useSelector<RootState, InitialUserState>((state) => state.user);

  return (
    <>
      <BrowserRouter>
        {accessToken && <Menu name={name} key={window.location.pathname} />}
        <Switch>
          <LandingRoute path="/" exact>
            <Landing />
          </LandingRoute>
          <ProtectedRoute path="/home" exact>
            <Home />
          </ProtectedRoute>
          <ProtectedRoute path="/settings" exact>
            <UserSettings />
          </ProtectedRoute>
          <Route exact>
            <NotFound />
          </Route>
        </Switch>
        <Notification />
      </BrowserRouter>
    </>
  );
};

export default App;
