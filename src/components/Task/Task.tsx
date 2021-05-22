import React from 'react';
import { Button } from 'components/Button';
import { useTasks } from 'hooks';
import { ButtonStyle, Task as TaskType } from 'models';

import { TaskButtonsContainer, TaskContainer, TaskDescripton, TaskHeader, TaskHeading } from './styles';

interface Props {
  task: TaskType;
}

const Task = ({ task: { _id, title, finished, description, color } }: Props) => {
  const { finishTask, deleteTask } = useTasks();

  // TODO: add ability to edit task

  return (
    <TaskContainer finished={finished}>
      <TaskHeader color={color}>
        <TaskHeading>{title}</TaskHeading>
      </TaskHeader>
      <TaskDescripton>{description}</TaskDescripton>
      <TaskButtonsContainer>
        <Button buttonStyle={ButtonStyle.TASK_FINISH} color={color} onClick={() => finishTask(_id)}>
          {finished ? 'Unfinish' : 'Finish'}
        </Button>
        <Button buttonStyle={ButtonStyle.TASK_DELETE} onClick={() => deleteTask(_id)}>
          Delete
        </Button>
      </TaskButtonsContainer>
    </TaskContainer>
  );
};

export { Task };
