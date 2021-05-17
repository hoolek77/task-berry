import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CreateTaskType, Task, TasksState, UpdateTaskType } from 'models';
import { api } from 'utils';

const initialState: TasksState = {
  tasks: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
};

export const getTasksThunk = createAsyncThunk('tasks/getTasks', async (accessToken: string) => {
  try {
    const { data } = await api.get('/tasks', {
      headers: { Authorization: `bearer ${accessToken}` },
    });

    return data;
  } catch (ex) {
    throw new Error('Something went wrong while getting your todos.');
  }
});

export const addTaskThunk = createAsyncThunk(
  'tasks/addTask',
  async ({ task, accessToken }: { task: CreateTaskType; accessToken: string }) => {
    try {
      const { data } = await api.post('/tasks', task, {
        headers: { Authorization: `bearer ${accessToken}` },
      });

      return data;
    } catch (ex) {
      throw new Error('Something went wrong while adding your todo.');
    }
  },
);

export const updateFinishedTaskThunk = createAsyncThunk(
  'tasks/updateFinishedTask',
  async ({ id, accessToken }: { id: string; accessToken: string }) => {
    try {
      const { data }: { data: Task } = await api.put(
        `/tasks/${id}/update-finished`,
        {},
        {
          headers: { Authorization: `bearer ${accessToken}` },
        },
      );

      return { finished: data.finished, _id: data._id };
    } catch (ex) {
      throw new Error('Something went wrong while chaning finished property of your todo.');
    }
  },
);

export const updateTaskThunk = createAsyncThunk(
  'tasks/updateTask',
  async ({ task, id, accessToken }: { task: UpdateTaskType; id: string; accessToken: string }) => {
    try {
      const { data } = await api.put(`/tasks/${id}/edit`, task, {
        headers: { Authorization: `bearer ${accessToken}` },
      });

      return data;
    } catch (ex) {
      throw new Error('Something went wrong while updating your todo.');
    }
  },
);

export const deleteTaskThunk = createAsyncThunk(
  'tasks/deleteTask',
  async ({ id, accessToken }: { id: string; accessToken: string }) => {
    try {
      await api.delete(`/tasks/${id}`, {
        headers: { Authorization: `bearer ${accessToken}` },
      });

      return id;
    } catch (ex) {
      throw new Error('Something went wrong while deleting your todo.');
    }
  },
);

const taskModule = createSlice({
  name: 'taskModule',
  initialState,
  reducers: {
    resetTasksToInitial() {
      return initialState;
    },
    resetAsyncTasksState(state) {
      state.isSuccess = false;
      state.isError = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTasksThunk.fulfilled, (state, { payload }: { payload: Task[] }) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.tasks = payload;
    });
    builder.addCase(getTasksThunk.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getTasksThunk.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
    builder.addCase(addTaskThunk.fulfilled, (state, { payload }: { payload: Task }) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.tasks.push(payload);
    });
    builder.addCase(addTaskThunk.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addTaskThunk.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
    builder.addCase(updateTaskThunk.fulfilled, (state, { payload }: { payload: Task }) => {
      state.isLoading = false;
      state.isSuccess = true;
      const index = state.tasks.findIndex((task) => task._id === payload._id);
      state.tasks[index] = payload;
    });
    builder.addCase(updateTaskThunk.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateTaskThunk.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
    builder.addCase(updateFinishedTaskThunk.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = true;
      const index = state.tasks.findIndex((task) => task._id === payload._id);
      state.tasks[index].finished = payload.finished;
    });
    builder.addCase(updateFinishedTaskThunk.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateFinishedTaskThunk.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
    builder.addCase(deleteTaskThunk.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.tasks = state.tasks.filter((task) => task._id !== payload);
    });
    builder.addCase(deleteTaskThunk.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteTaskThunk.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export const { resetTasksToInitial, resetAsyncTasksState } = taskModule.actions;

export { taskModule };
