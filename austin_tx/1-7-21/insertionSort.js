const insertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    let j = i;
    while (j > 0 && array[j] < array[j - 1]) {
      let swap = array[j];
      array[j] = array[j - 1];
      array[j - 1] = swap;
      j--;
    }
  }
  return array;
};
