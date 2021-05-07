import { useDispatch } from 'react-redux';

import { Notification } from '../../models';
import { closeNotification as close, openNotification as open } from '../../store/reducers/notifications';

const useNotifications = () => {
  const dispatch = useDispatch();

  const openNotification = (notification: Notification) => {
    dispatch(open(notification));
  };

  const closeNotification = () => {
    dispatch(close());
  };

  return {
    openNotification,
    closeNotification,
  };
};

export { useNotifications };
