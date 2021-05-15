import { ReactNode } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useUser } from 'hooks';

const ProtectedRoute = ({ children, ...rest }: { children: ReactNode; path: string; exact: boolean }) => {
  const { accessToken } = useUser();
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
