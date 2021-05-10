import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button } from 'components/Button';
import { ButtonStyle } from 'components/Button/styles';
import { Input } from 'components/Input';
import { useNotifications } from 'hooks/useNotifications';
import { RootState } from 'store';
import { InitialUserState, signInThunk, UserSignIn } from 'store/reducers/user';

import { SignInContainer, SignInHeader } from './styles';

interface SignInProps {
  setIsSignUp: Dispatch<SetStateAction<boolean>>;
}

export const SignIn = ({ setIsSignUp }: SignInProps) => {
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
        <Input
          type="text"
          name="email"
          placeholder="Email"
          required
          value={user.email}
          onChange={(e) => setUser((prevState) => ({ ...prevState, email: e.target.value }))}
        />
        <Input
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
        <Button buttonStyle={ButtonStyle.SIGN_SECONDARY} onClick={() => setIsSignUp((prev) => !prev)}>
          Sign Up
        </Button>
      </form>
      {isLoading && <h1>LOADING...</h1>}
    </SignInContainer>
  );
};
