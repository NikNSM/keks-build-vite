import { createSlice } from '@reduxjs/toolkit';
import { TypeProductsCards } from '../../type/type-data';
import { getListProducts } from './api-product-action';

type TypeProductState = {
  listProducts: TypeProductsCards | never[];
};

const initialState: TypeProductState = {
  listProducts: [],
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getListProducts.fulfilled, (state, action) => {
      state.listProducts = action.payload;
    });
  },
});

export const reducerProduct = productSlice.reducer;
