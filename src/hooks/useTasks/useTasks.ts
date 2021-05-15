import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RootState } from 'store';
import {
  addTaskThunk,
  CreateTaskType,
  deleteTaskThunk,
  getTasksThunk,
  InititalTasksState,
  updateFinishedTaskThunk,
} from 'store/reducers/tasks';
import { signOut as signOutAction } from 'store/reducers/user';

const useTasks = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { tasks, isError, isLoading, isSuccess } = useSelector<RootState, InititalTasksState>((state) => state.tasks);

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

  const signOut = () => {
    dispatch(signOutAction());
    history.go(0);
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
    signOut,
  };
};

export { useTasks };
