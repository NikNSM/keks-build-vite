import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { reducersUsers } from './users-slice/user-slice';
import { createApi } from '../service/api';
import { reducerReviews } from './reviews-slice/reviews-slice';
import { reducerProduct } from './product-slice/product-slice';
import { redirect } from './middleware/redirect';
const api = createApi();

export const rootReducer = combineReducers({
  user: reducersUsers,
  reviews: reducerReviews,
  product: reducerProduct,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});
