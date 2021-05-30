import { FC } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { LanguagePicker, MotionAnimation, Notification, ProtectedRoute, UnprotectedRoute } from 'components';
import { AnimatePresence } from 'framer-motion';
import { useNotifications } from 'hooks';
import { FilteredTasks, Home, Landing, UserSettings } from 'views';
import { NotFound } from 'views/NotFound';

const App: FC = () => {
  const location = useLocation();
  useNotifications();

  return (
    <>
      <LanguagePicker />
      <AnimatePresence initial={false} exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <UnprotectedRoute path="/" exact>
            <Landing />
          </UnprotectedRoute>
          <ProtectedRoute path="/home" exact>
            <Home />
          </ProtectedRoute>
          <ProtectedRoute path="/home/:label" exact>
            <FilteredTasks />
          </ProtectedRoute>
          <ProtectedRoute path="/settings" exact>
            <UserSettings />
          </ProtectedRoute>
          <Route exact>
            <MotionAnimation>
              <NotFound />
            </MotionAnimation>
          </Route>
        </Switch>
      </AnimatePresence>
      <Notification />
    </>
  );
};

export default App;
