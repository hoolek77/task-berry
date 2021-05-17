import { useDispatch, useSelector } from 'react-redux';
import { useUser } from 'hooks/useUser';
import { CreateTaskType, TasksState } from 'models';
import { RootState } from 'store';
import {
  addTaskThunk,
  deleteTaskThunk,
  getTasksThunk,
  resetAsyncTasksState,
  updateFinishedTaskThunk,
} from 'store/reducers/tasks';

const useTasks = () => {
  const dispatch = useDispatch();
  const { accessToken } = useUser();
  const { tasks, isError, isLoading, isSuccess } = useSelector<RootState, TasksState>((state) => state.tasks);

  const getTasks = async () => {
    await dispatch(getTasksThunk(accessToken));
    dispatch(resetAsyncTasksState());
  };

  const addTask = async (task: CreateTaskType) => {
    await dispatch(addTaskThunk({ task, accessToken }));
    dispatch(resetAsyncTasksState());
  };
  const finishTask = async (id: string) => {
    await dispatch(updateFinishedTaskThunk({ id, accessToken }));
    dispatch(resetAsyncTasksState());
  };

  const deleteTask = async (id: string) => {
    await dispatch(deleteTaskThunk({ id, accessToken }));
    dispatch(resetAsyncTasksState());
  };

  return {
    tasks,
    isError,
    isLoading,
    isSuccess,
    addTask,
    getTasks,
    finishTask,
    deleteTask,
  };
};

export { useTasks };
