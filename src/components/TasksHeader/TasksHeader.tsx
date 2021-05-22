import React from 'react';
import { useTranslation } from 'react-i18next';
import { Task } from 'models';

import { Header } from './styles';

interface Props {
  tasks: Task[];
  label?: string;
}

const TasksHeader = ({ tasks, label }: Props) => {
  const { t } = useTranslation();

  return (
    <Header>
      {label ? t('tasksHeader.headerWithLabel', { label }) : t('tasksHeader.header')}
      <p>
        {tasks.length} {t('tasksHeader.tasks')} |{' '}
        <span>
          {tasks.filter((task) => task.finished).length} {t('tasksHeader.finished')}
        </span>
      </p>
    </Header>
  );
};

export { TasksHeader };
