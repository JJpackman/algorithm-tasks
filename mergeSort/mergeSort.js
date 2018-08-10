export const mergeSort = (() => {
  const merge = (right, left, asc) => {
    const resultList = [];
    let lIndex = 0;
    let rIndex = 0;

    while (lIndex < left.length && rIndex < right.length) {
      if (asc) {
          if (left[lIndex] < right[rIndex]) {
            resultList.push(left[lIndex]);
            lIndex++;
          } else {
            resultList.push(right[rIndex]);
            rIndex++;
          }
      } else {
        if (left[lIndex] > right[rIndex]) {
          resultList.push(left[lIndex]);
          lIndex++;
        } else {
          resultList.push(right[rIndex]);
          rIndex++;
        }
      }
    }

    return resultList.concat(right.slice(rIndex).concat(left.slice(lIndex)));
  };

  return (list = [], asc = true) => {
    if (list.length < 2) {
      return list;
    }

    const middle = Math.floor(list.length / 2);

    debugger;
    return merge(
      mergeSort(list.slice(0, middle), asc), // right part
      mergeSort(list.slice(middle), asc),    // left part
      asc
    );
  }
})();
