import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button } from 'components/Button';
import { Input } from 'components/Input';
import { useUser } from 'hooks';
import { ButtonStyle } from 'models';
import { openNotification } from 'store/reducers/notifications';
import { api } from 'utils';

import { SignUpContainer, SignUpHeader } from './styles';

interface SignUpProps {
  setIsSignUp: Dispatch<SetStateAction<boolean>>;
}

export interface SignUpData {
  email: string;
  name: string;
  password: string;
  passwordRepeat: string;
}

const SignUp = ({ setIsSignUp }: SignUpProps) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { signIn, isSuccess, isError } = useUser();
  const [{ email, name, password, passwordRepeat }, setSignUpData] = useState<SignUpData>({
    email: '',
    name: '',
    password: '',
    passwordRepeat: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await api.post('/auth/signup', { email, name, password });
      signIn({ email, password });
      setIsLoading(false);
    } catch (ex) {
      dispatch(openNotification({ severity: 'error', message: 'Something went wrong while creating your account.' }));
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(openNotification({ severity: 'success', message: 'Sign up successful!' }));
      history.push('/home');
    }

    if (isError) {
      dispatch(openNotification({ severity: 'error', message: 'Unable to login!' }));
    }
  }, [isSuccess, isError, dispatch, history]);

  return (
    <SignUpContainer>
      <SignUpHeader>SIGN UP</SignUpHeader>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setSignUpData((prev) => ({ ...prev, email: e.target.value }))}
          required
        />
        <Input
          type="text"
          name="name"
          value={name}
          placeholder="Name"
          onChange={(e) => setSignUpData((prev) => ({ ...prev, name: e.target.value }))}
          required
        />
        <Input
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setSignUpData((prev) => ({ ...prev, password: e.target.value }))}
          required
        />
        <Input
          type="password"
          name="confirmPassword"
          value={passwordRepeat}
          placeholder="Confirm Password"
          onChange={(e) => setSignUpData((prev) => ({ ...prev, passwordRepeat: e.target.value }))}
          style={{ marginBottom: '25px' }}
          required
        />

        <Button type="submit" buttonStyle={ButtonStyle.SUBMIT_MAIN} isLoading={isLoading}>
          Register
        </Button>
        <Button
          type="button"
          buttonStyle={ButtonStyle.SUBMIT_SECONDARY}
          onClick={() => setIsSignUp((prev: boolean) => !prev)}
          isLoading={isLoading}
        >
          Sign In
        </Button>
      </form>
    </SignUpContainer>
  );
};

export { SignUp };
