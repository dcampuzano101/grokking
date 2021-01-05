const moveElementToEnd = (array, target) => {
  //instantiate two pointers, one in beg. one in end
  let i = 0;
  let j = array.length - 1;

  //loop
  while (i < j) {
    // if target is already @ the end, decrement and continue;
    while (i < j && array[j] === target) {
      j--;
    }
    // if element in front is target, swap with j.
    if (array[i] === target) {
      let swap = array[i];
      array[i] = array[j];
      array[j] = swap;
    }
    i++;
  }
  return array;
};
