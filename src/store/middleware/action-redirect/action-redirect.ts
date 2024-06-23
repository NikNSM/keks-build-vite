import { AddressesRoute } from '../../../const';
import { createAction } from '@reduxjs/toolkit';

export const redirectToRoute = createAction<AddressesRoute>(
  'page/redirectToRoute'
);
