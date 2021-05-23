import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { Button } from 'components/Button';
import { Input } from 'components/Input';
import { useNotifications, useUser } from 'hooks';
import { ButtonStyle } from 'models';
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
  const { t } = useTranslation();
  const history = useHistory();
  const { openNotification } = useNotifications();
  const { signIn, isSuccess, isError } = useUser();
  const [{ email, name, password, passwordRepeat }, setSignUpData] = useState<SignUpData>({
    email: '',
    name: '',
    password: '',
    passwordRepeat: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const validate = () => {
    if (name.length < 2 || name.length > 60) {
      return openNotification({
        severity: 'error',
        message: t('errors.nameError'),
      });
    }

    if (email.length < 10 || email.length > 60) {
      return openNotification({
        severity: 'error',
        message: t('errors.emailLengthError'),
      });
    }

    if (!/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(password)) {
      return openNotification({
        severity: 'error',
        message: t('errors.passwordError'),
      });
    }

    if (password !== passwordRepeat) {
      return openNotification({
        severity: 'error',
        message: t('errors.passwordsNotSameError'),
      });
    }

    return true;
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (validate() !== true) return;

    try {
      setIsLoading(true);
      await api.post('/auth/signup', { email, name, password });
      signIn({ email, password });
      setIsLoading(false);
    } catch (ex) {
      openNotification({ severity: 'error', message: t('errors.signUpError') });
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      openNotification({ severity: 'success', message: t('successes.signUp') });
      history.push('/home');
    }

    if (isError) {
      openNotification({ severity: 'error', message: t('errors.login') });
    }
  }, [isSuccess, isError, openNotification, history, t]);

  return (
    <SignUpContainer>
      <SignUpHeader>{t('landing.signUp.header')}</SignUpHeader>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="email"
          value={email}
          placeholder={t('landing.signUp.email')}
          onChange={(e) => setSignUpData((prev) => ({ ...prev, email: e.target.value }))}
          required
        />
        <Input
          type="text"
          name="name"
          value={name}
          placeholder={t('landing.signUp.name')}
          onChange={(e) => setSignUpData((prev) => ({ ...prev, name: e.target.value }))}
          required
        />
        <Input
          type="password"
          name="password"
          value={password}
          placeholder={t('landing.signUp.password')}
          onChange={(e) => setSignUpData((prev) => ({ ...prev, password: e.target.value }))}
          required
        />
        <Input
          type="password"
          name="confirmPassword"
          value={passwordRepeat}
          placeholder={t('landing.signUp.confirmPassword')}
          onChange={(e) => setSignUpData((prev) => ({ ...prev, passwordRepeat: e.target.value }))}
          style={{ marginBottom: '25px' }}
          required
        />

        <Button type="submit" buttonStyle={ButtonStyle.SUBMIT_MAIN} isLoading={isLoading} disabled={isLoading}>
          {t('landing.signUp.buttonRegister')}
        </Button>
        <Button
          type="button"
          buttonStyle={ButtonStyle.SUBMIT_SECONDARY}
          onClick={() => setIsSignUp((prev: boolean) => !prev)}
          disabled={isLoading}
        >
          {t('landing.signUp.buttonSignIn')}
        </Button>
      </form>
    </SignUpContainer>
  );
};

export { SignUp };
