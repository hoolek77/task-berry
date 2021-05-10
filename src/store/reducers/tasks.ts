import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Task } from 'models';
import { api } from 'utils';

export type InititalTasksState = {
  tasks: Task[];
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
};

export type CreateTaskType = {
  title: string;
  description: string;
  color: string;
};

export type UpdateTaskType = {
  title?: string;
  description?: string;
  color?: string;
};

const initialState: InititalTasksState = {
  tasks: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
};

export const getTasksThunk = createAsyncThunk('tasks/getTasks', async (token: string) => {
  try {
    const { data } = await api.get('/tasks', {
      headers: { Authorization: `bearer ${token}` },
    });

    return data;
  } catch (ex) {
    throw new Error('Something went wrong while getting your todos.');
  }
});

export const addTaskThunk = createAsyncThunk(
  'tasks/addTask',
  async ({ task, token }: { task: CreateTaskType; token: string }) => {
    try {
      const { data } = await api.post('/tasks', task, {
        headers: { Authorization: `bearer ${token}` },
      });

      return data;
    } catch (ex) {
      throw new Error('Something went wrong while adding your todo.');
    }
  },
);

export const updateFinishedTaskThunk = createAsyncThunk(
  'tasks/updateFinishedTask',
  async ({ id, token }: { id: string; token: string }) => {
    try {
      const { data }: { data: Task } = await api.put(
        `/tasks/${id}/update-finished`,
        {},
        {
          headers: { Authorization: `bearer ${token}` },
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
  async ({ task, id, token }: { task: UpdateTaskType; id: string; token: string }) => {
    try {
      const { data } = await api.put(`/tasks/${id}/edit`, task, {
        headers: { Authorization: `bearer ${token}` },
      });

      return data;
    } catch (ex) {
      throw new Error('Something went wrong while updating your todo.');
    }
  },
);

export const deleteTaskThunk = createAsyncThunk(
  'tasks/deleteTask',
  async ({ id, token }: { id: string; token: string }) => {
    try {
      await api.delete(`/tasks/${id}`, {
        headers: { Authorization: `bearer ${token}` },
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
  reducers: {},
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

export { taskModule };
