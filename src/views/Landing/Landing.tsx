import { ReactComponent as LandingSvg } from 'assets/LandingSvg.svg';
import { SignIn } from 'components';

import { LandingPageContainer, Sign, Splash } from './styles';

export const Landing = () => {
  return (
    <LandingPageContainer>
      <Splash>
        <p>Keep your plans organized!</p>
        <span>everything that you need in one place.</span>
        <LandingSvg />
      </Splash>
      <Sign>
        <span>TASK BERRY</span>
        <SignIn />
      </Sign>
    </LandingPageContainer>
  );
};
