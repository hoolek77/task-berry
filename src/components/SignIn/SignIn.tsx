import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'components/Button';
import { Input } from 'components/Input';
import { useNotifications, useUser } from 'hooks';
import { ButtonStyle, UserSignIn } from 'models';

import { SignInContainer, SignInHeader } from './styles';

interface SignInProps {
  setIsSignUp: Dispatch<SetStateAction<boolean>>;
}

export const SignIn = ({ setIsSignUp }: SignInProps) => {
  const { t } = useTranslation();
  const { openNotification } = useNotifications();
  const { isLoading, signIn, isError, isSuccess } = useUser();
  const [user, setUser] = useState<UserSignIn>({ email: '', password: '' });

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    signIn(user);
  };

  useEffect(() => {
    if (isError) {
      openNotification({ severity: 'error', message: t('errors.login') });
    }
  }, [isError, isSuccess, openNotification, t]);

  return (
    <SignInContainer>
      <SignInHeader>{t('landing.signIn.header')}</SignInHeader>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="email"
          placeholder={t('landing.signIn.email')}
          required
          value={user.email}
          onChange={(e) => setUser((prevState) => ({ ...prevState, email: e.target.value }))}
        />
        <Input
          type="password"
          name="password"
          placeholder={t('landing.signIn.password')}
          required
          value={user.password}
          onChange={(e) => setUser((prevState) => ({ ...prevState, password: e.target.value }))}
        />
        <Button buttonStyle={ButtonStyle.SUBMIT_MAIN} type="submit" isLoading={isLoading} disabled={isLoading}>
          {t('landing.signIn.buttonSignIn')}
        </Button>
        <Button
          buttonStyle={ButtonStyle.SUBMIT_SECONDARY}
          onClick={() => setIsSignUp((prev) => !prev)}
          disabled={isLoading}
        >
          {t('landing.signIn.buttonSignUp')}
        </Button>
      </form>
    </SignInContainer>
  );
};
