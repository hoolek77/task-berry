import React, { useEffect, useState } from 'react';
import { ReactComponent as PlusSvg } from 'assets/Plus.svg';
import { Button, PageWrapper, TaskAdd, TasksContainer, TasksHeader, TasksLoader } from 'components';
import { useTasks, useUser } from 'hooks';
import { useNotifications } from 'hooks/useNotifications';
import { ButtonStyle } from 'models';

const Home = () => {
  const { tasks, isError, isLoading } = useTasks();
  const { isSuccess } = useUser();
  const { openNotification } = useNotifications();
  const [isPopup, setIsPopup] = useState(false);

  useEffect(() => {
    if (isError) {
      openNotification({ severity: 'error', message: 'Something went wrong!' });
    }

    if (isSuccess) {
      openNotification({ severity: 'success', message: 'Log in successful!' });
    }
  }, [isError, isSuccess, openNotification]);

  return (
    <PageWrapper>
      <TasksHeader tasks={tasks} />
      {!isLoading ? <TasksContainer tasks={tasks} /> : <TasksLoader />}
      <Button buttonStyle={ButtonStyle.TASK_ADD} onClick={() => setIsPopup(true)}>
        <PlusSvg />
      </Button>
      {isPopup && <TaskAdd setIsPopup={setIsPopup} />}
    </PageWrapper>
  );
};

export { Home };
