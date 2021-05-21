import React from 'react';
import { Task } from 'models';

import { Header } from './styles';

interface Props {
  tasks: Task[];
  label?: string;
}

const TasksHeader = ({ tasks, label }: Props) => {
  return (
    <Header>
      {label ? `Tasks with label: ${label}` : 'Total Tasks'}
      <p>
        {tasks.length} Tasks | <span>{tasks.filter((task) => task.finished).length} Finished</span>
      </p>
    </Header>
  );
};

export { TasksHeader };
