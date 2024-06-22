import { TypeState, TypeAppDispatch } from './type/type-redux';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';

export const getDateFormate = (date: string, dateFormate: string) =>
  dayjs(date).format(dateFormate);

export const getRandomInteger = (a: number, b: number) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

export const getRandomArrayElements = <T>(elements: T[]): T[] => {
  const randomElement = getRandomInteger(0, elements.length - 4);
  return elements.slice(randomElement, randomElement + 3);
};

export const useAppDispatch = () => useDispatch<TypeAppDispatch>();

export const useAppSelector: TypedUseSelectorHook<TypeState> = useSelector;
