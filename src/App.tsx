import { FC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { LanguagePicker, Notification, ProtectedRoute, UnprotectedRoute } from 'components';
import { FilteredTasks, Home, Landing, UserSettings } from 'views';
import { NotFound } from 'views/NotFound';

const App: FC = () => {
  // * prepared user: emilly.jones@google.com passwd: Hello321!

  // ? idea for page switching animations

  return (
    <>
      <LanguagePicker />
      <BrowserRouter>
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
