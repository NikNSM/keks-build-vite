import { createSlice } from '@reduxjs/toolkit';
import { AutorizationStatus, RegistrationStatus } from '../../const';
import { TypeUser } from '../../type/type-data';
import {
  checkAutorizationUser,
  registrationUser,
  loadingUserAvatar,
} from './api-action';

type TypeInitialStateUsers = {
  status: AutorizationStatus;
  loading: boolean;
  error: string;
  registrationStatus: RegistrationStatus;
  avatarLoadig: boolean;
  users: Omit<TypeUser, 'token'>;
};

const initialState: TypeInitialStateUsers = {
  status: AutorizationStatus.UNKNOW,
  loading: false,
  error: '',
  registrationStatus: RegistrationStatus.UNKNOW,
  avatarLoadig: false,
  users: {
    name: '',
    email: '',
    avatarUrl: '',
  },
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    changeRegistration: (state) => {
      state.registrationStatus = RegistrationStatus.UNKNOW;
    },
    changeError: (state) => {
      state.error = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(checkAutorizationUser.fulfilled, (state, action) => {
        state.status = AutorizationStatus.AUTORIZATION;
        state.users = action.payload;
      })
      .addCase(checkAutorizationUser.rejected, (state) => {
        state.status = AutorizationStatus.NO_AUTORIZATION;
      })
      .addCase(registrationUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(registrationUser.fulfilled, (state) => {
        state.registrationStatus = RegistrationStatus.SUCCESSFULLY;
        state.loading = false;
      })
      .addCase(registrationUser.rejected, (state, action) => {
        if (action.payload) {
          state.loading = false;
          state.registrationStatus = RegistrationStatus.ERROR;
          state.error = action.payload.message;
        }
      })
      .addCase(loadingUserAvatar.fulfilled, (state) => {
        state.loading = false;
        state.avatarLoadig = true;
      })
      .addCase(loadingUserAvatar.rejected, (state, action) => {
        if (action.payload) {
          state.loading = false;
          state.error = action.payload.message;
        }
      });
  },
});

export const reducersUsers = usersSlice.reducer;
export const { changeRegistration, changeError } = usersSlice.actions;
