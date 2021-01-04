const selectionSort = (array) => {
  let startIndex = 0;
  while (startIndex < array.length - 1) {
    let smallestIndex = startIndex;
    for (let i = startIndex + 1; i < array.length; i++) {
      if (array[i] < array[smallestIndex]) {
        smallestIndex = i;
      }
    }
    let swap = array[smallestIndex];
    array[smallestIndex] = array[startIndex];
    array[startIndex] = swap;
    startIndex++;
  }
  return array;
};
