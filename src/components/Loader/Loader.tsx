import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import { LoaderContainer } from './styles';

interface LoaderProps {
  size: number;
}

const Loader = ({ size }: LoaderProps) => {
  return (
    <LoaderContainer>
      <CircularProgress size={size} />
    </LoaderContainer>
  );
};

export { Loader };
