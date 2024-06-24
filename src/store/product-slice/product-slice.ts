import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TypeProductPage, TypeProductsCards } from '../../type/type-data';
import { getListProducts, getFavoriteProducts } from './api-product-action';

type TypeProductState = {
  loadingFavoriteList: boolean;
  listProducts: TypeProductsCards;
  listProductsMainPage: TypeProductsCards;
  favoriteProducts: TypeProductPage[];
};

const initialState: TypeProductState = {
  loadingFavoriteList: false,
  listProducts: [],
  listProductsMainPage: [],
  favoriteProducts: [],
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getListProductsMainPage: (
      state,
      action: PayloadAction<TypeProductsCards>
    ) => {
      state.listProductsMainPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getListProducts.fulfilled, (state, action) => {
        state.listProducts = action.payload;
      })
      .addCase(getFavoriteProducts.pending, (state) => {
        state.loadingFavoriteList = true;
      })
      .addCase(getFavoriteProducts.fulfilled, (state, action) => {
        state.favoriteProducts = action.payload;
        state.loadingFavoriteList = false;
      });
  },
});

export const reducerProduct = productSlice.reducer;
export const { getListProductsMainPage } = productSlice.actions;
