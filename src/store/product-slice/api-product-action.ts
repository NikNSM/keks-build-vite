import { createAsyncThunk } from '@reduxjs/toolkit';
import { TypeProductPage, TypeProductsCards } from '../../type/type-data';
import { AxiosInstance } from 'axios';
import { ApiRoute } from '../../const';
import { TypeAppDispatch } from '../../type/type-redux';

export const getListProducts = createAsyncThunk<
  TypeProductsCards,
  undefined,
  {
    extra: AxiosInstance;
  }
>('product/getListProducts', async (_arg, { extra: api }) => {
  const { data } = await api.get<TypeProductsCards>(ApiRoute.PRODUCTS);
  return data;
});

export const getFavoriteProducts = createAsyncThunk<
  TypeProductPage[],
  undefined,
  {
    extra: AxiosInstance;
  }
>('product/getFavoriteProduct', async (_arg, { extra: api }) => {
  const { data } = await api.get<TypeProductPage[]>(ApiRoute.FAVORITES);
  return data;
});

export const addToFavorites = createAsyncThunk<
  TypeProductPage,
  string,
  {
    dispatch: TypeAppDispatch;
    extra: AxiosInstance;
  }
>('product/addToFavorite', async (arg, { dispatch, extra: api }) => {
  const { data } = await api.put<TypeProductPage>(
    `${ApiRoute.FAVORITES}/${arg}`
  );
  dispatch(getListProducts());
  dispatch(getFavoriteProducts());
  return data;
});

export const deleteFavorite = createAsyncThunk<
  TypeProductPage,
  string,
  {
    dispatch: TypeAppDispatch;
    extra: AxiosInstance;
  }
>('product/addToFavorite', async (arg, { dispatch, extra: api }) => {
  const { data } = await api.delete<TypeProductPage>(
    `${ApiRoute.FAVORITES}/${arg}`
  );
  dispatch(getListProducts());
  dispatch(getFavoriteProducts());
  return data;
});
