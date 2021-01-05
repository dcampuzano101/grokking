const threeNumberSum = (array, targetSum) => {
  // input an array of unsorted numbers, and a targetSum
  // output an array of arrays that sum to the targetSum

  //sort the array, therefore we know which indexes to increment/decrement
  array.sort((a, b) => a - b);
  const triplets = [];
  //loop through the array, since we are keeping track of three indexes we want to ensure we
  //do not hit the end of the array
  for (let i = 0; i < array.length - 2; i++) {
    let left = i + 1;
    let right = array.length - 1;

    while (left < right) {
      let currentSum = array[i] + array[left] + array[right];
      if (currentSum === targetSum) {
      }
    }
  }
};
