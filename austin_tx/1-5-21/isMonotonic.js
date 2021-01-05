const isMonotonic = (array) => {
  let isNonIncreasing = true;
  let isNonDecreasing = true;
  // assume array is both nonDecreasing / nonIncreasing
  for (let i = 1; i < array.length; i++) {
    // start @ index 1 b/c we will be comparing with element in front

    // attempt to invalidate both assumptions
    if (array[i] < array[i - 1]) isNonDecreasing = false;
    if (array[i] > array[i - 1]) isNonIncreasing = false;
  }
  return isNonDecreasing || isNonIncreasing;
};
