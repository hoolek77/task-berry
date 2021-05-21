import { ReactNode, useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useTasks, useUser } from 'hooks';

const ProtectedRoute = ({ children, ...rest }: { children: ReactNode; path: string; exact: boolean }) => {
  const { accessToken } = useUser();
  const { getTasks, tasks } = useTasks();

  useEffect(() => {
    if (tasks.length === 0) {
      getTasks();
    }
    // eslint-disable-next-line
  }, []);

  return (
    <Route
      {...rest}
      render={() => {
        return accessToken ? children : <Redirect to="/" />;
      }}
    />
  );
};

export { ProtectedRoute };
