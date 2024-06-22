import { TypeState, TypeAppDispatch } from './type/type-redux';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';

export const getDateFormate = (date: string, dateFormate: string) =>
  dayjs(date).format(dateFormate);

export const useAppDispatch = () => useDispatch<TypeAppDispatch>();

export const useAppSelector: TypedUseSelectorHook<TypeState> = useSelector;
