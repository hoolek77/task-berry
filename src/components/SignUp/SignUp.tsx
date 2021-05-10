import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button } from 'components/Button';
import { ButtonStyle } from 'components/Button/styles';
import { Input } from 'components/Input';
import { useNotifications } from 'hooks/useNotifications';
import { RootState } from 'store';
import { InitialUserState, signInThunk } from 'store/reducers/user';
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
  const { isSuccess, isError } = useSelector<RootState, InitialUserState>((state) => state.user);
  const { openNotification } = useNotifications();
  const [{ email, name, password, passwordRepeat }, setSignUpData] = useState<SignUpData>({
    email: '',
    name: '',
    password: '',
    passwordRepeat: '',
  });

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      await api.post('/auth/signup', { email, name, password });
      dispatch(signInThunk({ email, password }));
    } catch (ex) {
      openNotification({ severity: 'error', message: 'Something went wrong while creating your account.' });
    }
  };

  useEffect(() => {
    if (isSuccess) {
      openNotification({ severity: 'success', message: 'Sign up successful!' });
      history.push('/home');
    }

    if (isError) {
      openNotification({ severity: 'error', message: 'Unable to login!' });
    }
  }, [isSuccess, isError, openNotification, history]);

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

        <Button type="submit" buttonStyle={ButtonStyle.SIGN_MAIN}>
          Register
        </Button>
        <Button
          type="button"
          buttonStyle={ButtonStyle.SIGN_SECONDARY}
          onClick={() => setIsSignUp((prev: boolean) => !prev)}
        >
          Sign In
        </Button>
      </form>
    </SignUpContainer>
  );
};

export { SignUp };
