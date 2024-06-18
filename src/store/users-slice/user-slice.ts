import { createSlice } from '@reduxjs/toolkit';
import { AutorizationStatus } from '../../const';
import { TypeUser } from '../../type/type-data';
import { checkAutorizationUser } from './api-action';

type TypeInitialStateUsers = {
  status: AutorizationStatus;
  users: Omit<TypeUser, 'token'>;
};

const initialState: TypeInitialStateUsers = {
  status: AutorizationStatus.UNKNOW,
  users: {
    name: '',
    email: '',
    avatarUrl: '',
  },
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(checkAutorizationUser.fulfilled, (state, action) => {
        state.status = AutorizationStatus.AUTORIZATION;
        state.users = action.payload;
      })
      .addCase(checkAutorizationUser.rejected, (state) => {
        state.status = AutorizationStatus.NO_AUTORIZATION;
      });
  },
});

export const reducersUsers = usersSlice.reducer;
