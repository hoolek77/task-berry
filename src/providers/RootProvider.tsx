import { FC } from 'react';

import { ReduxProvider } from './ReduxProvider';

const RootProvider: FC = ({ children }) => {
  return <ReduxProvider>{children}</ReduxProvider>;
};

export { RootProvider };
