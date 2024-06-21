import { createAsyncThunk } from '@reduxjs/toolkit';
import { TypeProductsCards } from '../../type/type-data';
import { AxiosInstance } from 'axios';
import { ApiRoute } from '../../const';

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
