import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { UserSignIn, UserState } from 'models';
import { RootState } from 'store';
import { signInThunk, signOut as signOutAction } from 'store/reducers/user';

const useUser = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { accessToken, name, isSuccess, isLoading, isError, email } = useSelector<RootState, UserState>(
    (state) => state.user,
  );

  const signIn = (user: UserSignIn) => {
    dispatch(signInThunk(user));
  };

  const signOut = () => {
    dispatch(signOutAction());
    history.go(0);
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
