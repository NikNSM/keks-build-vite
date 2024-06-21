import { configureStore } from '@reduxjs/toolkit';
import { reducersUsers } from './users-slice/user-slice';
import { createApi } from '../service/api';
import { reducerReviews } from './reviews-slice/reviews-slice';
import { reducerProduct } from './product-slice/product-slice';
const api = createApi();

export const store = configureStore({
  reducer: {
    user: reducersUsers,
    reviews: reducerReviews,
    product: reducerProduct,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});
