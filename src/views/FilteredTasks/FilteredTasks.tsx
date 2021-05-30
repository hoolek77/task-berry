import React, { useState } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { ReactComponent as PlusSvg } from 'assets/Plus.svg';
import { Button, PageWrapper, TaskAdd, TasksContainer, TasksHeader, TasksLoader } from 'components';
import { useTasks } from 'hooks';
import { ButtonStyle } from 'models';

const FilteredTasks = () => {
  const { getTasksByLabel, isLoading } = useTasks();
  const { label } = useParams<{ label: string }>();
  const [isPopup, setIsPopup] = useState(false);
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
          <Button buttonStyle={ButtonStyle.TASK_ADD} onClick={() => setIsPopup(true)}>
            <PlusSvg />
          </Button>
          {isPopup && <TaskAdd setIsPopup={setIsPopup} activeLabel={label} />}
        </PageWrapper>
      ) : (
        <Redirect to="/home" />
      )}
    </>
  );
};

export { FilteredTasks };
