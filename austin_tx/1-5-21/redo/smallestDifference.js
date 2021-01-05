const smallestDifference = (arrayOne, arrayTwo) => {
  let smallest = Infinity;
  let current = Infinity;
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);
  let indexOne = 0;
  let indexTwo = 0;
  let smallestPair;
  while (indexOne < arrayOne.length && indexTwo < arrayTwo.length) {
    let first = arrayOne[indexOne];
    let second = arrayTwo[indexTwo];

    if (first < second) {
      current = second - first;
      indexOne++;
    } else if (second < first) {
      current = first - second;
      indexTwo++;
    } else {
      return [first, second];
    }

    if (smallest > current) {
      smallest = current;
      smallestPair = [first, second];
    }
  }
  return smallestPair;
};
