import { useDispatch, useSelector } from 'react-redux';
import { CreateTaskType, TasksState } from 'models';
import { RootState } from 'store';
import { addTaskThunk, deleteTaskThunk, getTasksThunk, updateFinishedTaskThunk } from 'store/reducers/tasks';

const useTasks = () => {
  const dispatch = useDispatch();
  const { tasks, isError, isLoading, isSuccess } = useSelector<RootState, TasksState>((state) => state.tasks);

  const addTask = (task: CreateTaskType, accessToken: string) => {
    dispatch(addTaskThunk({ task, accessToken }));
  };

  const getTasks = (accessToken: string) => {
    dispatch(getTasksThunk(accessToken));
  };

  const finishTask = (id: string, accessToken: string) => {
    dispatch(updateFinishedTaskThunk({ id, accessToken }));
  };

  const deleteTask = (id: string, accessToken: string) => {
    dispatch(deleteTaskThunk({ id, accessToken }));
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
