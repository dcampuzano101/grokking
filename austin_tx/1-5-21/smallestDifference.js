const smallestDifference = (arrayOne, arrayTwo) => {
  let smallest = Infinity;
  let current = Infinity;
  let smallestPair;

  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);

  let indexOne = 0;
  let indexTwo = 0;

  while (indexOne < arrayOne.length && indexTwo < arrayTwo.length) {
    let firstNum = arrayOne[indexOne];
    let secondNum = arrayTwo[indexTwo];

    if (firstNum < secondNum) {
      current = secondNum - firstNum;
      indexOne++;
    } else if (secondNum < firstNum) {
      current = firstNum - secondNum;
      indexTwo++;
    } else {
      return [firstNum, secondNum];
    }

    if (smallest > current) {
      smallest = current;
      smallestPair = [firstNum, secondNum];
    }
  }
  return smallestPair;
};
