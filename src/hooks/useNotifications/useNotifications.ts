import { useDispatch, useSelector } from 'react-redux';
import { Notification, NotificationsState } from 'models';
import { RootState } from 'store';
import { closeNotification as close, openNotification as openAction } from 'store/reducers/notifications';

const useNotifications = () => {
  const dispatch = useDispatch();
  const { message, open, severity } = useSelector<RootState, NotificationsState>((state) => state.notification);

  const openNotification = (notification: Notification) => {
    dispatch(openAction(notification));
  };

  const closeNotification = () => {
    dispatch(close());
  };

  return {
    message,
    open,
    severity,
    openNotification,
    closeNotification,
  };
};

export { useNotifications };
