import { createAsyncThunk } from '@reduxjs/toolkit';
import { TypeFeedback } from '../../type/type-data';
import { AxiosInstance } from 'axios';
import { ApiRoute } from '../../const';

export const getLastReview = createAsyncThunk<
  TypeFeedback,
  undefined,
  {
    extra: AxiosInstance;
  }
>('reviews/getLastReview', async (_arg, { extra: api }) => {
  const { data } = await api.get<TypeFeedback>(ApiRoute.LAST_REVIEW);
  return data;
});
