import { createSlice } from '@reduxjs/toolkit';

import { Notification, Severity } from '../../models';

export type InitialNotificationsState = {
  severity: Severity;
  message: string;
  open: boolean;
};

const initialState: InitialNotificationsState = {
  severity: 'success',
  message: '',
  open: false,
};

const notificationsModule = createSlice({
  name: 'notificationsModule',
  initialState,
  reducers: {
    openNotification: (state, { payload }: { payload: Notification }) => {
      return { ...payload, open: true };
    },
    closeNotification: (state) => {
      return { ...state, open: false };
    },
  },
});

export const { openNotification, closeNotification } = notificationsModule.actions;

export { notificationsModule };
