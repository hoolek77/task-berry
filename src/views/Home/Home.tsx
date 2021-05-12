import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as PlusSvg } from 'assets/Plus.svg';
import { Button, TaskAdd } from 'components';
import { ButtonStyle } from 'components/Button/styles';
import { RootState } from 'store';
import { getTasksThunk, InititalTasksState } from 'store/reducers/tasks';
import { InitialUserState } from 'store/reducers/user';

const Home = () => {
  const dispatch = useDispatch();

  const { tasks } = useSelector<RootState, InititalTasksState>((state) => state.tasks);
  const { accessToken } = useSelector<RootState, InitialUserState>((state) => state.user);
  const [isPopup, setIsPopup] = useState(false);

  useEffect(() => {
    dispatch(getTasksThunk(accessToken));
  }, [dispatch, accessToken]);

  return (
    <div>
      <div>{JSON.stringify(tasks)}</div>
      <Button buttonStyle={ButtonStyle.TASK_ADD} onClick={() => setIsPopup(true)}>
        <PlusSvg />
      </Button>
      {isPopup && <TaskAdd setIsPopup={setIsPopup} />}
    </div>
  );
};

export { Home };
