import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { PageWrapper, TasksContainer, TasksHeader, TasksLoader } from 'components';
import { useTasks } from 'hooks';

const FilteredTasks = () => {
  const { getTasksByLabel, isLoading } = useTasks();
  const { label } = useParams<{ label: string }>();
  const tasks = getTasksByLabel(label);

  return (
    <>
      {tasks.length > 0 ? (
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
      ) : (
        <Redirect to="/home" />
      )}
    </>
  );
};

export { FilteredTasks };
