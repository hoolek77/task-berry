import { FC } from 'react';

import { ReduxProvider } from './ReduxProvider';
import { ThemeProvider } from './ThemeProvider';

const RootProvider: FC = ({ children }) => {
  return (
    <ReduxProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </ReduxProvider>
  );
};

export { RootProvider };
