export default (sortedList = [], item, asc = true) => {
  let min = 0;
  let max = sortedList.length - 1;
  let guessIndex;

  while (min <= max) {
    guessIndex = Math.floor((min + max) / 2);
    const checkedValue = sortedList[guessIndex];

    if (checkedValue < item) {
      if (asc) {
        min = guessIndex + 1;
      } else {
        max = guessIndex - 1;
      }
    } else if (checkedValue > item) {
      if (asc) {
        max = guessIndex - 1;
      } else {
        min = guessIndex + 1;
      }
    } else {
      return guessIndex;
    }
  }

  return -1;
};
