import { useDispatch, useSelector } from 'react-redux';
import { UserSignIn, UserState } from 'models';
import { RootState } from 'store';
import { resetTasksToInitial } from 'store/reducers/tasks';
import { resetAsyncUserState, signInThunk, signOut as signOutAction } from 'store/reducers/user';

const useUser = () => {
  const dispatch = useDispatch();
  const { accessToken, name, isSuccess, isLoading, isError, email } = useSelector<RootState, UserState>(
    (state) => state.user,
  );

  const signIn = async (user: UserSignIn) => {
    await dispatch(signInThunk(user));
    dispatch(resetAsyncUserState());
  };

  const signOut = () => {
    dispatch(signOutAction());
    dispatch(resetTasksToInitial());
    dispatch(resetAsyncUserState());
  };

  return {
    accessToken,
    name,
    isSuccess,
    isLoading,
    isError,
    email,
    signIn,
    signOut,
  };
};

export { useUser };
