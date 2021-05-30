import { ReactNode } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { useUser } from 'hooks';

interface Props extends RouteProps {
  children: ReactNode;
}

const UnprotectedRoute = ({ children, ...rest }: Props) => {
  const { accessToken } = useUser();
  return (
    <Route
      {...rest}
      render={() => {
        return !accessToken ? children : <Redirect to="/home" />;
      }}
    />
  );
};

export { UnprotectedRoute };
