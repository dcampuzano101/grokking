const isValidSubSequence = (array, sequence) => {
  let i = 0;
  let sequencePointer = 0;
  let isValid = false;

  while (i < array.length) {
    let sequenceEl = sequence[sequencePointer];
    let arrayEl = array[i];

    if (arrayEl === sequenceEl) {
      sequencePointer++;
    }
    i++;
  }
  return sequencePointer === sequence.length;
};

const arr = [5, 1, 22, 25, 6, -1, 8, 10],
  seq = [5, 1, 22, 6, -1, 8, 10];

console.log(isValidSubSequence(arr, seq));
