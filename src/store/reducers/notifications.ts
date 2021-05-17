import { createSlice } from '@reduxjs/toolkit';

import { Notification, NotificationsState } from '../../models';

const initialState: NotificationsState = {
  severity: 'success',
  message: '',
  open: false,
};

const notificationsModule = createSlice({
  name: 'notificationsModule',
  initialState,
  reducers: {
    openNotification: (state, { payload }: { payload: Notification }) => {
      state.open = true;
      state.message = payload.message;
      state.severity = payload.severity;
    },
    closeNotification: (state) => {
      state.open = false;
    },
  },
});

export const { openNotification, closeNotification } = notificationsModule.actions;

export { notificationsModule };
