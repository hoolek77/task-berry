import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useNotifications } from 'hooks/useNotifications';
import { RootState } from 'store';
import { InitialUserState, signInThunk } from 'store/reducers/user';

export interface UserSignIn {
  email: string;
  password: string;
}

export const SignIn: FC = () => {
  const dispatch = useDispatch();
  const { isError, isSuccess, isLoading } = useSelector<RootState, InitialUserState>((state) => state.user);
  const { openNotification } = useNotifications();
  const history = useHistory();
  const [user, setUser] = useState<UserSignIn>({ email: '', password: '' });

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    dispatch(signInThunk(user));
  };

  useEffect(() => {
    if (isError) {
      openNotification({ severity: 'error', message: 'Unable to login!' });
    }

    if (isSuccess) {
      openNotification({ severity: 'success', message: 'Log in successful!' });
      history.push('/home');
    }
  }, [isError, isSuccess, openNotification, history]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          placeholder="Email"
          required
          value={user.email}
          onChange={(e) => setUser((prevState) => ({ ...prevState, email: e.target.value }))}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          value={user.password}
          onChange={(e) => setUser((prevState) => ({ ...prevState, password: e.target.value }))}
        />
        <button type="submit">Sign In</button>
      </form>
      {isLoading && <h1>LOADING...</h1>}
    </div>
  );
};
