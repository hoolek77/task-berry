import React, { useEffect, useState } from 'react';
import { ReactComponent as PlusSvg } from 'assets/Plus.svg';
import { Button, Loader, TaskAdd } from 'components';
import { TasksList } from 'components/TasksList';
import { useTasks, useUser } from 'hooks';
import { useNotifications } from 'hooks/useNotifications';
import { ButtonStyle } from 'models';

import { HomeContainer, TasksContainer, TasksHeader, TasksLoader } from './styles';

const Home = () => {
  const { tasks, isError, isLoading, getTasks } = useTasks();
  const { isSuccess } = useUser();
  const { openNotification } = useNotifications();
  const { accessToken } = useUser();
  const [isPopup, setIsPopup] = useState(false);

  useEffect(() => {
    if (tasks.length === 0) {
      getTasks();
    }
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [accessToken]);

  useEffect(() => {
    if (isError) {
      openNotification({ severity: 'error', message: 'Something went wrong!' });
    }

    if (isSuccess) {
      openNotification({ severity: 'success', message: 'Log in successful!' });
    }
  }, [isError, isSuccess, openNotification]);

  return (
    <HomeContainer>
      <TasksHeader>
        Total Tasks
        <p>
          {tasks.length} Tasks | <span>{tasks.filter((task) => task.finished).length} Finished</span>
        </p>
      </TasksHeader>
      {!isLoading && (
        <TasksContainer>
          <TasksList tasks={tasks} />
        </TasksContainer>
      )}
      {isLoading && (
        <TasksLoader>
          <Loader size={100} />
        </TasksLoader>
      )}
      <Button buttonStyle={ButtonStyle.TASK_ADD} onClick={() => setIsPopup(true)}>
        <PlusSvg />
      </Button>
      {isPopup && <TaskAdd setIsPopup={setIsPopup} />}
    </HomeContainer>
  );
};

export { Home };
