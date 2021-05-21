import React from 'react';
import { Loader } from 'components/Loader';

import { LoaderContainer } from './styles';

const TasksLoader = () => {
  return (
    <LoaderContainer>
      <Loader size={100} />
    </LoaderContainer>
  );
};

export { TasksLoader };
