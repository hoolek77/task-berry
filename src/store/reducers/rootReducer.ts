import { combineReducers } from '@reduxjs/toolkit';

import { notificationsModule } from './notifications';
import { taskModule } from './tasks';
import { userModule } from './user';

const rootReducer = combineReducers({
  notification: notificationsModule.reducer,
  user: userModule.reducer,
  tasks: taskModule.reducer,
});

export { rootReducer };
