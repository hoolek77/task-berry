import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'components/Button';
import { ButtonStyle } from 'components/Button/styles';
import { Task as TaskType } from 'models';
import { RootState } from 'store';
import { deleteTaskThunk, updateFinishedTaskThunk } from 'store/reducers/tasks';
import { InitialUserState } from 'store/reducers/user';

import { TaskButtonsContainer, TaskContainer, TaskDescripton, TaskHeader, TaskHeading } from './styles';

interface Props {
  task: TaskType;
}

const Task = ({ task: { _id, title, finished, description, color } }: Props) => {
  const dispatch = useDispatch();
  const { accessToken } = useSelector<RootState, InitialUserState>((state) => state.user);

  const finishTask = () => {
    dispatch(updateFinishedTaskThunk({ id: _id, accessToken }));
  };

  const deleteTask = () => {
    dispatch(deleteTaskThunk({ id: _id, accessToken }));
  };

  return (
    <TaskContainer finished={finished}>
      <TaskHeader color={color}>
        <TaskHeading>{title}</TaskHeading>
      </TaskHeader>
      <TaskDescripton>{description}</TaskDescripton>
      <TaskButtonsContainer>
        <Button buttonStyle={ButtonStyle.TASK_FINISH} color={color} onClick={finishTask}>
          {finished ? 'Undo' : 'Finish'}
        </Button>
        <Button buttonStyle={ButtonStyle.TASK_DELETE} onClick={deleteTask}>
          Delete
        </Button>
      </TaskButtonsContainer>
    </TaskContainer>
  );
};

export { Task };
