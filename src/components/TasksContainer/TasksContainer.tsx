import React from 'react';
import { LabelMenu } from 'components/LabelMenu';
import { TasksList } from 'components/TasksList';
import { useTasks } from 'hooks';
import { Task } from 'models';

import { Container } from './styles';

interface Props {
  tasks: Task[];
}

const TasksContainer = ({ tasks }: Props) => {
  const { labels } = useTasks();

  return (
    <>
      {labels.length > 0 && <LabelMenu />}
      <Container>
        <TasksList tasks={tasks} />
      </Container>
    </>
  );
};

export { TasksContainer };
