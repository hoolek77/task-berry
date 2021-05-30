import { useDispatch, useSelector } from 'react-redux';
import { useUser } from 'hooks/useUser';
import { CreateTaskType, TasksState, UpdateTaskType } from 'models';
import { RootState } from 'store';
import {
  addTaskThunk,
  deleteTaskThunk,
  getLabels,
  getTasksThunk,
  resetAsyncTasksState,
  updateFinishedTaskThunk,
  updateTaskThunk,
} from 'store/reducers/tasks';

const useTasks = () => {
  const dispatch = useDispatch();
  const { accessToken } = useUser();
  const { tasks, isError, isLoading, isSuccess, labels } = useSelector<RootState, TasksState>((state) => state.tasks);

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

  const updateTask = async (id: string, task: UpdateTaskType) => {
    await dispatch(updateTaskThunk({ task, id, accessToken }));
    dispatch(resetAsyncTasksState());
    dispatch(getLabels());
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
    updateTask,
  };
};

export { useTasks };
