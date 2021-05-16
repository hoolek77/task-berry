import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { COOKIE_TOKEN, LS_EMAIL, LS_USERNAME } from 'constants/api';
import { UserPayload, UserSignIn, UserState } from 'models';
import { api, getCookieValue, removeCookie, saveCookie } from 'utils';

const initialState: UserState = {
  email: localStorage.getItem(LS_EMAIL) || '',
  name: localStorage.getItem(LS_USERNAME) || '',
  accessToken: getCookieValue(COOKIE_TOKEN) || '',
  isLoading: false,
  isSuccess: false,
  isError: false,
};

export const signInThunk = createAsyncThunk('user/signIn', async (user: UserSignIn, thunkAPI) => {
  try {
    const { data, status } = await api.post('/auth/signin', user);

    if (status === 201) {
      const cookieOpt = {
        cname: COOKIE_TOKEN,
        cvalue: data.accessToken,
        expiredHours: 1,
      };

      saveCookie(cookieOpt);

      localStorage.setItem(LS_EMAIL, data.email);
      localStorage.setItem(LS_USERNAME, data.name);

      return data;
    }
    return thunkAPI.rejectWithValue(data);
  } catch (e) {
    return thunkAPI.rejectWithValue(e.response.data);
  }
});

const userModule = createSlice({
  name: 'userModule',
  initialState,
  reducers: {
    signOut(state) {
      removeCookie(COOKIE_TOKEN);
      state.accessToken = '';
    },
    reset(state) {
      state.isError = false;
      state.isSuccess = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signInThunk.fulfilled, (state, { payload }: { payload: UserPayload }) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.email = payload.email;
      state.name = payload.name;
      state.accessToken = payload.accessToken;
    });
    builder.addCase(signInThunk.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(signInThunk.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export const { signOut, reset } = userModule.actions;

export { userModule };
