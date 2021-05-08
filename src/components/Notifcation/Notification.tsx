import { useSelector } from 'react-redux';
import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { useNotifications } from 'hooks/useNotifications';
import { RootState } from 'store';
import { InitialNotificationsState } from 'store/reducers/notifications';

export const Notification = () => {
  const { message, open, severity } = useSelector<RootState, InitialNotificationsState>((state) => state.notification);
  const { closeNotification } = useNotifications();

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    closeNotification();
  };

  return (
    <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  );
};
