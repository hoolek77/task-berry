import { FC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { LanguagePicker, Menu, Notification, ProtectedRoute, UnprotectedRoute } from 'components';
import { useUser } from 'hooks';
import { FilteredTasks, Home, Landing, UserSettings } from 'views';
import { NotFound } from 'views/NotFound';

const App: FC = () => {
  const { accessToken, name } = useUser();

  // TODO: organized better translations (for sure for errors)

  return (
    <>
      <LanguagePicker />
      <BrowserRouter>
        {accessToken && <Menu name={name} />}
        <Switch>
          <UnprotectedRoute path="/" exact>
            <Landing />
          </UnprotectedRoute>
          <ProtectedRoute path="/home" exact>
            <Home />
          </ProtectedRoute>
          <ProtectedRoute path="/tasks/:label" exact>
            <FilteredTasks />
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
