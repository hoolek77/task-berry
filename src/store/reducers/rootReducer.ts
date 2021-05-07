import { combineReducers } from '@reduxjs/toolkit';

import { notificationsModule } from './notifications';

const rootReducer = combineReducers({
  notification: notificationsModule.reducer,
});

export { rootReducer };
