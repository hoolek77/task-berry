import { FC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ProtectedRoute } from 'components/ProtectedRoute';
import { Home } from 'views/Home';

import { Notification } from './components/Notifcation';
import { Landing } from './views';

const App: FC = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Landing />
          </Route>
          <ProtectedRoute path="/home" exact>
            <Home />
          </ProtectedRoute>
        </Switch>
        <Notification />
      </BrowserRouter>
    </>
  );
};

export default App;
