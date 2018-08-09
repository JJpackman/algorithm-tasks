export default (arr = [], joinString = '') => {
  if (!Array.isArray(arr) || typeof joinString !== 'string') {
    throw new TypeError('Invalid type of one of the argument.');
  }

  let res = '';

  if (arr.length > 0) {
    res = arr[0];

    for (let i = 1; i < arr.length; i++) {
      res += joinString + arr[i];
    }
  }

  return res;
};
