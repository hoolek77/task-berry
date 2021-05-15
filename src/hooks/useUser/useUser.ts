import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { InitialUserState, signInThunk, UserSignIn } from 'store/reducers/user';

const useUser = () => {
  const dispatch = useDispatch();
  const { accessToken, name, isSuccess, isLoading, isError, email } = useSelector<RootState, InitialUserState>(
    (state) => state.user,
  );

  const signIn = (user: UserSignIn) => {
    dispatch(signInThunk(user));
  };

  return {
    accessToken,
    name,
    isSuccess,
    isLoading,
    isError,
    email,
    signIn,
  };
};

export { useUser };
