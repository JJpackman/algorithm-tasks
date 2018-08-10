export const isNumber = (n) => typeof n === 'number' && !isNaN(n) && isFinite(n);

export const memoize = (cb) => {
  let cache = {};

  return (n) => {
    if (!cache[n]) {
      cache[n] = cb(n);
      return true;
    }

    return false;
  };
};

export const times10 = (n) => {
  if (isNumber(n)) {
    return n * 10;
  } else {
    throw new TypeError('Invalid type. n should be a number!');
  }
};
