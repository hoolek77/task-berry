import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ReactComponent as LandingDarkSvg } from 'assets/LandingDark.svg';
import { ReactComponent as LandingLightSvg } from 'assets/LandingLight.svg';
import { SignIn, SignUp } from 'components';
import gsap from 'gsap';
import { useTheme } from 'hooks';

import { LandingPageContainer, Sign, Splash } from './styles';

const Landing = () => {
  const { t } = useTranslation();
  const wrapper = useRef<HTMLDivElement>(null);
  const [isSignUp, setIsSignUp] = useState(false);
  const { isDarkTheme } = useTheme();

  useEffect(() => {
    const board = document.getElementById('Board');
    const taskOne = document.getElementById('Task1');
    const taskTwo = document.getElementById('Task2');
    const taskThree = document.getElementById('Task3');

    gsap.set([board], {});
    gsap.set([taskOne, taskTwo, taskThree], { autoAlpha: 0 });
    const tl = gsap.timeline({ defaults: { ease: 'power3.inout' } });

    gsap.from(board, { duration: 1.2, y: -400, ease: 'bounce', delay: 1 });
    tl.fromTo(taskOne, {}, { duration: 0.4, autoAlpha: 1, delay: 2.2 })
      .fromTo(taskTwo, {}, { duration: 0.4, autoAlpha: 1 })
      .fromTo(taskThree, {}, { duration: 0.4, autoAlpha: 1 });
  }, []);

  return (
    <>
      <LandingPageContainer>
        <Splash ref={wrapper}>
          <p>{t('landing.headerMain')}</p>
          <span>{t('landing.headerSecondary')}</span>
          {isDarkTheme() ? <LandingDarkSvg /> : <LandingLightSvg />}
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
