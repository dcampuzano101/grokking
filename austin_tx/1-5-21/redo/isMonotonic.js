const isMonotonic = (array) => {
  // assume both decreasing / increasing = true
  let isNonIncreasing = true;
  let isNonDecreasing = true;

  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[i - 1]) isNonIncreasing = false;
    if (array[i] > array[i - 1]) isNonDecreasing = false;
  }
  return isNonDecreasing || isNonIncreasing;
};
