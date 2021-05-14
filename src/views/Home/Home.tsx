import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as PlusSvg } from 'assets/Plus.svg';
import { Button, Loader, TaskAdd } from 'components';
import { ButtonStyle } from 'components/Button/styles';
import { TasksList } from 'components/TasksList';
import { useNotifications } from 'hooks/useNotifications';
import { RootState } from 'store';
import { getTasksThunk, InititalTasksState } from 'store/reducers/tasks';
import { InitialUserState } from 'store/reducers/user';

import { HomeContainer, TasksContainer, TasksHeader, TasksLoader } from './styles';

const Home = () => {
  const dispatch = useDispatch();
  const { openNotification } = useNotifications();

  const { tasks, isError, isLoading } = useSelector<RootState, InititalTasksState>((state) => state.tasks);
  const { accessToken } = useSelector<RootState, InitialUserState>((state) => state.user);
  const [isPopup, setIsPopup] = useState(false);

  useEffect(() => {
    dispatch(getTasksThunk(accessToken));
  }, [dispatch, accessToken]);

  useEffect(() => {
    if (isError) {
      openNotification({ severity: 'error', message: 'Something went wrong!' });
    }
  });

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
