const smallestDifference = (arrayOne, arrayTwo) => {
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);
  let indexOne = 0;
  let indexTwo = 0;
  let current = Infinity;
  let smallest = Infinity;
  let smallestPair;
  while (indexOne < arrayOne.length && indexTwo < arrayTwo.length) {
    let first = arrayOne[indexOne];
    let second = arrayTwo[indexTwo];

    if (first > second) {
      current = first - second;
      indexTwo++;
    } else if (first < second) {
      current = second - first;
      indexOne++;
    } else {
      return [first, second];
    }
    if (current < smallest) {
      smallest = current;
      smallestPair = [first, second];
    }
  }
  return smallestPair;
};
