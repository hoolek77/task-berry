import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { RootState } from 'store';
import { InitialUserState } from 'store/reducers/user';

const ProtectedRoute = ({ children, ...rest }: { children: ReactNode; path: string; exact: boolean }) => {
  const { accessToken } = useSelector<RootState, InitialUserState>((state) => state.user);
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
