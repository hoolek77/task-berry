import { combineReducers } from '@reduxjs/toolkit';

import { notificationsModule } from './notifications';
import { userModule } from './user';

const rootReducer = combineReducers({
  notification: notificationsModule.reducer,
  user: userModule.reducer,
});

export { rootReducer };
