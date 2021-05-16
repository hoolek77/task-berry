import { useState } from 'react';
import { ReactComponent as LandingSvg } from 'assets/Landing.svg';
import { SignIn, SignUp } from 'components';

import { LandingPageContainer, Sign, Splash } from './styles';

const Landing = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <>
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
    </>
  );
};

export { Landing };
