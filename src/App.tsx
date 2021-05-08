import { FC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Notification } from 'components/Notifcation';
import { ProtectedRoute } from 'components/ProtectedRoute';
import { Landing } from 'views';
import { Home } from 'views/Home';

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
