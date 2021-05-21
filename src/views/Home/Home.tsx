import React, { useEffect, useState } from 'react';
import { ReactComponent as PlusSvg } from 'assets/Plus.svg';
import { Button, PageWrapper, TaskAdd, TasksContainer, TasksHeader, TasksLoader } from 'components';
import { useNotifications, useTasks, useUser } from 'hooks';
import { ButtonStyle } from 'models';

const Home = () => {
  const { tasks, isLoading } = useTasks();
  const { isSuccess } = useUser();
  const { openNotification } = useNotifications();
  const [isPopup, setIsPopup] = useState(false);

  useEffect(() => {
    if (isSuccess) {
      openNotification({ severity: 'success', message: 'Log in successful!' });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
