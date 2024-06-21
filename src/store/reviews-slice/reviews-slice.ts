import { createSlice } from '@reduxjs/toolkit';
import { TypeFeedback } from '../../type/type-data';
import { getLastReview } from './api-review-action';

type TypeReviewsSliceState = {
  lastReview: TypeFeedback | null;
};

const initialState: TypeReviewsSliceState = {
  lastReview: null,
};

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getLastReview.fulfilled, (state, action) => {
        state.lastReview = action.payload;
      })
      .addCase(getLastReview.rejected, (state) => {
        state.lastReview = null;
      });
  },
});

export const reducerReviews = reviewsSlice.reducer;
