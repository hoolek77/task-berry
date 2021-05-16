import { useDispatch, useSelector } from 'react-redux';
import { UserSignIn, UserState } from 'models';
import { RootState } from 'store';
import { reset, signInThunk, signOut as signOutAction } from 'store/reducers/user';

const useUser = () => {
  const dispatch = useDispatch();
  const { accessToken, name, isSuccess, isLoading, isError, email } = useSelector<RootState, UserState>(
    (state) => state.user,
  );

  const signIn = (user: UserSignIn) => {
    dispatch(signInThunk(user));
    dispatch(reset());
  };

  const signOut = () => {
    dispatch(signOutAction());
    dispatch(reset());
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
