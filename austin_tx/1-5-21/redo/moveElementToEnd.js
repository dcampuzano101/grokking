const moveElementToEnd = (array, target) => {
  // two pointers, one at the beginning + end
  let i = 0;
  let j = array.length - 1;

  while (i < j) {
    while (i < j && array[j] === target) {
      j--;
    }

    while (i < j && array[i] === target) {
      let swap = array[i];
      array[i] = array[j];
      array[j] = swap;
    }
    i++;
  }
  return array;
};
