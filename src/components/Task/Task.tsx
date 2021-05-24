import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'components/Button';
import { TaskEditPopup } from 'components/TaskEditPopup';
import { useTasks } from 'hooks';
import { ButtonStyle, Task as TaskType, UpdateTaskType } from 'models';
import { useTheme } from 'styled-components';
import { ThemeContentType } from 'styles/theme';

import {
  Edit,
  More,
  TaskButtonsContainer,
  TaskContainer,
  TaskDescripton,
  TaskEditDescriptionInput,
  TaskEditTitleInput,
  TaskHeader,
  TaskHeading,
} from './styles';

interface Props {
  task: TaskType;
}

const Task = ({ task: { _id, title, finished, description, color, label } }: Props) => {
  const { t } = useTranslation();
  const { finishTask, deleteTask, updateTask } = useTasks();
  const [isEditing, setIsEditing] = useState(false);
  const [isEditPopup, setIsEditPopup] = useState(false);
  const [updateTaskData, setUpdateTaskData] = useState<UpdateTaskType>({ title, description, color, label });
  const theme = useTheme() as ThemeContentType;

  const handleEditTaskSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (
      title === updateTaskData.title &&
      description === updateTaskData.description &&
      color === updateTaskData.color &&
      label === updateTaskData.label
    ) {
      setIsEditing(false);
      return;
    }
    updateTask(_id, updateTaskData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setUpdateTaskData({ title, description, color, label });
  };

  return (
    <>
      {isEditing ? (
        <form onSubmit={handleEditTaskSubmit}>
          <TaskContainer finished={finished}>
            <TaskHeader color={color}>
              <TaskEditTitleInput
                type="text"
                name="title"
                value={updateTaskData.title}
                color={color}
                onChange={(e) => setUpdateTaskData((prev) => ({ ...prev, title: e.target.value }))}
              />
              <More fill={theme.fontPrimary} onClick={() => setIsEditPopup(true)} />
            </TaskHeader>
            <TaskDescripton>
              <TaskEditDescriptionInput
                type="text"
                name="description"
                value={updateTaskData.description}
                onChange={(e) => setUpdateTaskData((prev) => ({ ...prev, description: e.target.value }))}
              />
            </TaskDescripton>

            <TaskButtonsContainer>
              <Button type="submit" buttonStyle={ButtonStyle.TASK_FINISH} color={color}>
                {t('home.task.save')}
              </Button>
              <Button buttonStyle={ButtonStyle.TASK_DELETE} onClick={handleCancel}>
                {t('home.task.cancel')}
              </Button>
            </TaskButtonsContainer>
          </TaskContainer>
        </form>
      ) : (
        <TaskContainer finished={finished}>
          <TaskHeader color={color}>
            <TaskHeading>{title}</TaskHeading>
            <Edit fill={theme.fontPrimary} onClick={() => setIsEditing(true)} />
          </TaskHeader>
          <TaskDescripton>{description}</TaskDescripton>
          <TaskButtonsContainer>
            <Button buttonStyle={ButtonStyle.TASK_FINISH} color={color} onClick={() => finishTask(_id)}>
              {finished ? t('home.task.unfinish') : t('home.task.finish')}
            </Button>
            <Button buttonStyle={ButtonStyle.TASK_DELETE} onClick={() => deleteTask(_id)}>
              {t('home.task.delete')}
            </Button>
          </TaskButtonsContainer>
        </TaskContainer>
      )}
      {isEditPopup && (
        <TaskEditPopup setIsPopup={setIsEditPopup} task={updateTaskData} setUpdateTaskData={setUpdateTaskData} />
      )}
    </>
  );
};

export { Task };
