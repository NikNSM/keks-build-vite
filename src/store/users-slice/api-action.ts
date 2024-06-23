import { createAsyncThunk } from '@reduxjs/toolkit';
import { TypeUser } from '../../type/type-data';
import { AxiosError, AxiosInstance } from 'axios';
import { ApiRoute, TIME_SHOW_MESSAGE } from '../../const';
import { dropToken, saveToken } from '../../service/token';
import { TypeAutorizationRequestUser } from '../../type/type-data';
import { TypeAppDispatch } from '../../type/type-redux';
import { TypeError } from '../../type/type-error';
import { changeError, changeRegistration } from './user-slice';
type TypeUserData = Omit<TypeUser, 'token'>;

export const checkAutorizationUser = createAsyncThunk<
  TypeUserData,
  undefined,
  {
    extra: AxiosInstance;
  }
>('user/checkAutorizationStatus', async (_arg, { extra: api }) => {
  const {
    data: { token, ...user },
  } = await api.get<TypeUser>(ApiRoute.AUTORIZATION);
  saveToken(token);
  return user;
});

export const clearErrorAction = createAsyncThunk(
  'user/clearError',
  (_arg, { dispatch }) => {
    setTimeout(() => dispatch(changeError()), TIME_SHOW_MESSAGE);
  }
);

export const clearRegistrationAction = createAsyncThunk(
  'user/clearError',
  (_arg, { dispatch }) => {
    setTimeout(() => dispatch(changeRegistration()), TIME_SHOW_MESSAGE);
  }
);

export const loadingUserAvatar = createAsyncThunk<
  TypeUserData,
  File,
  {
    dispatch: TypeAppDispatch;
    rejectValue: TypeError;
    extra: AxiosInstance;
  }
>(
  'user/loadingAvatar',
  async (arg, { extra: api, dispatch, rejectWithValue }) => {
    try {
      const avatarformData = new FormData();
      avatarformData.append('avatar', arg);

      const { data } = await api.post<TypeUser>(
        ApiRoute.POST_AVATAR_USER,
        avatarformData
      );
      dispatch(clearRegistrationAction());
      dropToken();
      return data;
    } catch (err) {
      const error = err as AxiosError<TypeError>;

      if (!error.response) {
        throw err;
      }
      dispatch(clearErrorAction());
      dispatch(clearRegistrationAction());
      return rejectWithValue(error.response.data);
    }
  }
);

export const registrationUser = createAsyncThunk<
  TypeUserData,
  TypeAutorizationRequestUser,
  {
    dispatch: TypeAppDispatch;
    extra: AxiosInstance;
    rejectValue: TypeError;
  }
>(
  'user/registrationUser',
  async (arg, { extra: api, dispatch, rejectWithValue }) => {
    try {
      const { avatar, ...user } = arg;

      const {
        data: { token, ...userDataServer },
      } = await api.post<TypeUser>(ApiRoute.REGISTRATION, user);

      if (avatar !== null) {
        saveToken(token);
        dispatch(loadingUserAvatar(avatar));
      }
      dispatch(clearRegistrationAction());
      return userDataServer;
    } catch (err) {
      const error = err as AxiosError<TypeError>;

      if (!error.response) {
        throw err;
      }
      dispatch(clearErrorAction());
      dispatch(clearRegistrationAction());
      return rejectWithValue(error.response.data);
    }
  }
);
