const bubbleSort = (array) => {
  // we infer that the array isn't sorted, instantiate sorted = false
  // while the array is sorted, we will iterate through and check to see if the array is sorted
  // and flip sorted = true
  // we check if the array is sorted by comparing to the element ahead of it
  // if it isn't sorted we swap the elements and flip sorted = false
  // and iterate from the beginning of the array again

  let sorted = false;

  while (!sorted) {
    sorted = true;

    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        let swap = array[i];
        array[i] = array[i + 1];
        array[i + 1] = swap;
        sorted = false;
      }
    }
  }

  return array;
};
