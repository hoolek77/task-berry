import React from 'react';
import { useHistory } from 'react-router-dom';
import { ReactComponent as NotFoundSvg } from 'assets/NotFound.svg';
import { Button } from 'components';
import { ButtonStyle } from 'components/Button/styles';

import { AppName, Message, NotFoundPageContainer } from './styles';

const NotFound = () => {
  const history = useHistory();

  return (
    <NotFoundPageContainer>
      <AppName>TASK MANAGER</AppName>
      <NotFoundSvg width="400px" height="300px" />
      <Message>You may have gotten lost. We belive our home page is better.</Message>
      <Button buttonStyle={ButtonStyle.TASK_SUBMIT} onClick={() => history.push('/')}>
        back to home
      </Button>
    </NotFoundPageContainer>
  );
};

export { NotFound };
