import { useDispatch } from 'react-redux';

import { Notification } from '../../models';
import { closeNotification, openNotification } from '../../store/reducers/notifications';

const useNotifications = () => {
  const dispatch = useDispatch();

  const open = (notification: Notification) => {
    dispatch(openNotification(notification));
  };

  const close = () => {
    dispatch(closeNotification());
  };

  return {
    open,
    close,
  };
};

export { useNotifications };
