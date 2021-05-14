import React from 'react';
import { Task } from 'components/Task/Task';
import { Task as TaskType } from 'models';

interface Props {
  tasks: TaskType[];
}

const TasksList = ({ tasks }: Props) => {
  return (
    <>
      {tasks.map((task) => (
        <Task key={task._id} task={task} />
      ))}
    </>
  );
};

export { TasksList };
