import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ReactComponent as PlusSvg } from 'assets/Plus.svg';
import { Button, Loader, TaskAdd } from 'components';
import { TasksList } from 'components/TasksList';
import { useTasks, useUser } from 'hooks';
import { useNotifications } from 'hooks/useNotifications';
import { ButtonStyle } from 'models';
import { getTasksThunk } from 'store/reducers/tasks';

import { HomeContainer, TasksContainer, TasksHeader, TasksLoader } from './styles';

const Home = () => {
  const dispatch = useDispatch();
  const { tasks, isError, isLoading } = useTasks();
  const { isSuccess } = useUser();
  const { openNotification } = useNotifications();
  const { accessToken } = useUser();
  const [isPopup, setIsPopup] = useState(false);

  useEffect(() => {
    dispatch(getTasksThunk(accessToken));
  }, [accessToken, dispatch]);

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
