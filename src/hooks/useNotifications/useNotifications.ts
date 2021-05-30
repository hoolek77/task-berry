import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useTasks } from 'hooks/useTasks';
import { useUser } from 'hooks/useUser';
import { Notification, NotificationsState } from 'models';
import { RootState } from 'store';
import { closeNotification as close, openNotification as openAction } from 'store/reducers/notifications';

const useNotifications = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { isSuccess: isUserSuccess, isError: isUserError } = useUser();
  const { isError: isTasksError } = useTasks();
  const { message, open, severity } = useSelector<RootState, NotificationsState>((state) => state.notification);

  useEffect(() => {
    if (isUserError) {
      dispatch(openAction({ severity: 'error', message: t('errors.login') }));
    }

    if (isUserSuccess) {
      dispatch(openAction({ severity: 'success', message: t('successes.login') }));
    }
  }, [isUserSuccess, isUserError, dispatch, t]);

  useEffect(() => {
    if (isTasksError) {
      dispatch(openAction({ severity: 'error', message: t('errors.somethingWentWrong') }));
    }
  }, [isTasksError, dispatch, t]);

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
