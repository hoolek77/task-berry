import React from 'react';
import { Button } from 'components/Button';
import { ButtonStyle } from 'components/Button/styles';
import { useTasks, useUser } from 'hooks';
import { Task as TaskType } from 'models';

import { TaskButtonsContainer, TaskContainer, TaskDescripton, TaskHeader, TaskHeading } from './styles';

interface Props {
  task: TaskType;
}

const Task = ({ task: { _id, title, finished, description, color } }: Props) => {
  const { finishTask, deleteTask } = useTasks();
  const { accessToken } = useUser();

  return (
    <TaskContainer finished={finished}>
      <TaskHeader color={color}>
        <TaskHeading>{title}</TaskHeading>
      </TaskHeader>
      <TaskDescripton>{description}</TaskDescripton>
      <TaskButtonsContainer>
        <Button buttonStyle={ButtonStyle.TASK_FINISH} color={color} onClick={() => finishTask(_id, accessToken)}>
          {finished ? 'Undo' : 'Finish'}
        </Button>
        <Button buttonStyle={ButtonStyle.TASK_DELETE} onClick={() => deleteTask(_id, accessToken)}>
          Delete
        </Button>
      </TaskButtonsContainer>
    </TaskContainer>
  );
};

export { Task };
