import { FC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Notification } from './components/Notifcation';
import { Landing } from './views';

const App: FC = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
        <Notification />
      </BrowserRouter>
    </>
  );
};

export default App;
