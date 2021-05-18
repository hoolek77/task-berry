import { FC } from 'react';

import { StyledPageWrapper } from './styles';

const PageWrapper: FC = ({ children }) => {
  return <StyledPageWrapper>{children}</StyledPageWrapper>;
};

export { PageWrapper };
