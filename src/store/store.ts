import { configureStore } from '@reduxjs/toolkit';
import { reducersUsers } from './users-slice/user-slice';
import { createApi } from '../service/api';

const api = createApi();

export const store = configureStore({
  reducer: {
    user: reducersUsers,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});
