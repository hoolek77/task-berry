import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button } from 'components/Button';
import { ButtonStyle } from 'components/Button/Button.style';
import { useNotifications } from 'hooks/useNotifications';
import { RootState } from 'store';
import { InitialUserState, signInThunk, UserSignIn } from 'store/reducers/user';

import { FormInput, SignInContainer, SignInHeader } from './SignIn.styles';

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
    <SignInContainer>
      <SignInHeader>SIGN IN</SignInHeader>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="email"
          placeholder="Email"
          required
          value={user.email}
          onChange={(e) => setUser((prevState) => ({ ...prevState, email: e.target.value }))}
        />
        <FormInput
          type="password"
          name="password"
          placeholder="Password"
          required
          value={user.password}
          onChange={(e) => setUser((prevState) => ({ ...prevState, password: e.target.value }))}
        />
        <Button buttonStyle={ButtonStyle.SIGN_MAIN} type="submit">
          Login
        </Button>
        <Button buttonStyle={ButtonStyle.SIGN_SECONDARY}>Sign Up</Button>
      </form>
      {isLoading && <h1>LOADING...</h1>}
    </SignInContainer>
  );
};
