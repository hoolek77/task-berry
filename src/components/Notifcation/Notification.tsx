import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { useNotifications } from 'hooks/useNotifications';

export const Notification = () => {
  const { closeNotification, message, open, severity } = useNotifications();

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
