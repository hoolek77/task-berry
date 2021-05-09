import { FC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Notification, ProtectedRoute } from 'components';
import { Home, Landing } from 'views';

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
