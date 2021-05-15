import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'components/Button';
import { Input } from 'components/Input';
import { useUser } from 'hooks';
import { useNotifications } from 'hooks/useNotifications';
import { ButtonStyle, UserSignIn } from 'models';

import { SignInContainer, SignInHeader } from './styles';

interface SignInProps {
  setIsSignUp: Dispatch<SetStateAction<boolean>>;
}

export const SignIn = ({ setIsSignUp }: SignInProps) => {
  const { isError, isSuccess, isLoading, signIn } = useUser();
  const { openNotification } = useNotifications();
  const history = useHistory();
  const [user, setUser] = useState<UserSignIn>({ email: '', password: '' });

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    signIn(user);
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
        <Button buttonStyle={ButtonStyle.SUBMIT_MAIN} type="submit" isLoading={isLoading}>
          Sign In
        </Button>
        <Button buttonStyle={ButtonStyle.SUBMIT_SECONDARY} onClick={() => setIsSignUp((prev) => !prev)}>
          Sign Up
        </Button>
      </form>
    </SignInContainer>
  );
};
