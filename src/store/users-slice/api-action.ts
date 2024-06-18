import { createAsyncThunk } from '@reduxjs/toolkit';
import { TypeUser } from '../../type/type-data';
import { AxiosInstance } from 'axios';
import { ApiRoute } from '../../const';
import { saveToken } from '../../service/token';
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
