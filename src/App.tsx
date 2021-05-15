import { FC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Menu, Notification, ProtectedRoute } from 'components';
import { useUser } from 'hooks';
import { Home, Landing, UserSettings } from 'views';
import { NotFound } from 'views/NotFound';

const App: FC = () => {
  const { accessToken, name } = useUser();

  return (
    <>
      <BrowserRouter>
        {accessToken && <Menu name={name} />}
        <Switch>
          <Route path="/" exact>
            <Landing accessToken={accessToken} />
          </Route>
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
