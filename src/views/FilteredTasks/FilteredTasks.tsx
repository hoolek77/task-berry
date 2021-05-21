import React from 'react';
import { useParams } from 'react-router-dom';
import { PageWrapper, TasksContainer, TasksHeader, TasksLoader } from 'components';
import { useTasks } from 'hooks';

const FilteredTasks = () => {
  const { getTasksByLabel, isLoading } = useTasks();
  const { label } = useParams<{ label: string }>();
  const tasks = getTasksByLabel(label);

  return (
    <PageWrapper>
      <TasksHeader tasks={tasks} label={label} />
      {isLoading ? (
        <TasksLoader />
      ) : (
        <>
          <TasksContainer tasks={tasks} />
        </>
      )}
    </PageWrapper>
  );
};

export { FilteredTasks };
