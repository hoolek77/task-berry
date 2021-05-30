import React, { useState } from 'react';
import { ReactComponent as PlusSvg } from 'assets/Plus.svg';
import { Button, PageWrapper, TaskAdd, TasksContainer, TasksHeader, TasksLoader } from 'components';
import { useTasks } from 'hooks';
import { ButtonStyle } from 'models';

const Home = () => {
  const { tasks, isLoading } = useTasks();

  const [isPopup, setIsPopup] = useState(false);

  return (
    <PageWrapper>
      <TasksHeader tasks={tasks} />
      {!isLoading ? <TasksContainer tasks={tasks} /> : <TasksLoader />}
      <Button buttonStyle={ButtonStyle.TASK_ADD} onClick={() => setIsPopup(true)}>
        <PlusSvg />
      </Button>
      {isPopup && <TaskAdd setIsPopup={setIsPopup} />}
    </PageWrapper>
  );
};

export { Home };
