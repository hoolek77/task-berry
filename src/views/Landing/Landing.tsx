import { SignIn } from 'components';

import { Sign } from './Landing.style';

export const Landing = () => {
  return (
    <div>
      <Sign>
        <span>TASK BERRY</span>
        <SignIn />
      </Sign>
    </div>
  );
};
