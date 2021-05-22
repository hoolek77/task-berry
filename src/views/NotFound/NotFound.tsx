import React from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { ReactComponent as NotFoundSvg } from 'assets/NotFound.svg';
import { Button } from 'components';
import { ButtonStyle } from 'models';

import { AppName, Message, NotFoundPageContainer } from './styles';

const NotFound = () => {
  const { t } = useTranslation();
  const history = useHistory();

  return (
    <NotFoundPageContainer>
      <AppName>TASK BERRY</AppName>
      <NotFoundSvg width="400px" height="300px" />
      <Message>{t('notFound.message')}</Message>
      <Button buttonStyle={ButtonStyle.SUBMIT_MAIN} onClick={() => history.push('/')}>
        {t('notFound.button')}
      </Button>
    </NotFoundPageContainer>
  );
};

export { NotFound };
