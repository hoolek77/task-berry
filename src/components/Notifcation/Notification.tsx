import { Snackbar } from '@material-ui/core';
import { useNotifications } from 'hooks';

import { StyledAlert } from './styles';

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
      <StyledAlert onClose={handleClose} severity={severity}>
        {message}
      </StyledAlert>
    </Snackbar>
  );
};
