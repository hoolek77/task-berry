import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useNotifications } from 'hooks/useNotifications';
import { useUser } from 'hooks/useUser';
import { CreateTaskType, TasksState } from 'models';
import { RootState } from 'store';
import {
  addTaskThunk,
  deleteTaskThunk,
  getLabels,
  getTasksThunk,
  resetAsyncTasksState,
  updateFinishedTaskThunk,
} from 'store/reducers/tasks';

const useTasks = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { openNotification } = useNotifications();
  const { accessToken } = useUser();
  const { tasks, isError, isLoading, isSuccess, labels } = useSelector<RootState, TasksState>((state) => state.tasks);

  useEffect(() => {
    if (isError) {
      openNotification({ severity: 'error', message: t('useTasks.error') });
    }
  }, [isError, isSuccess, openNotification, t]);

  const getTasks = async () => {
    await dispatch(getTasksThunk(accessToken));
    dispatch(resetAsyncTasksState());
    dispatch(getLabels());
  };

  const addTask = async (task: CreateTaskType) => {
    await dispatch(addTaskThunk({ task, accessToken }));
    dispatch(resetAsyncTasksState());
    dispatch(getLabels());
  };
  const finishTask = async (id: string) => {
    await dispatch(updateFinishedTaskThunk({ id, accessToken }));
    dispatch(resetAsyncTasksState());
  };

  const deleteTask = async (id: string) => {
    await dispatch(deleteTaskThunk({ id, accessToken }));
    dispatch(resetAsyncTasksState());
    dispatch(getLabels());
  };

  const getTasksByLabel = (label: string) => {
    return tasks.filter((task) => task.label === label);
  };

  return {
    tasks,
    isError,
    isLoading,
    isSuccess,
    labels,
    addTask,
    getTasks,
    finishTask,
    deleteTask,
    getTasksByLabel,
  };
};

export { useTasks };
