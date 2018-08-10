import { isNumber } from '../memoization/times10';

export const factorial = (n) => {
  if (!isNumber(n) || n < 0) {
    throw new TypeError('Invalid type. n should be a positive number');
  }

  if (n === 0) {
    return 1;
  }

  return n * factorial(n - 1);
};
