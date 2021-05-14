import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { ReactComponent as LandingSvg } from 'assets/Landing.svg';
import { SignIn, SignUp } from 'components';

import { LandingPageContainer, Sign, Splash } from './styles';

interface Props {
  accessToken: string;
}

const Landing = ({ accessToken }: Props) => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <>
      {!accessToken ? (
        <LandingPageContainer>
          <Splash>
            <p>Keep your plans organized!</p>
            <span>everything that you need in one place.</span>
            <LandingSvg />
          </Splash>
          <Sign>
            <span>TASK BERRY</span>
            {isSignUp ? <SignUp setIsSignUp={setIsSignUp} /> : <SignIn setIsSignUp={setIsSignUp} />}
          </Sign>
        </LandingPageContainer>
      ) : (
        <Redirect to="/home" />
      )}
    </>
  );
};

export { Landing };
