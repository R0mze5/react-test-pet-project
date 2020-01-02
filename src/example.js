import { timeout } from 'q';

export const sum = (a, b) => a + b;
export const immutablePush = (arr, val) => {
  const newArr = arr.concat();
  newArr.push(val);
  return newArr;
};
export const intervalPromise = (fn, timeout) => {
  return new Promise(resolve => setTimeout(() => resolve(fn()), timeout));
};
