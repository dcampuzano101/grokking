/*
Problem Statement #
We are given an array containing ‘n’ distinct numbers taken from the range 0 to ‘n’. 
Since the array has only ‘n’ numbers out of the total ‘n+1’ numbers, find the missing number.

Example 1:

Input: [4, 0, 3, 1]
Output: 2
*/

const missingNumber = (arr) => {
  let i = 0;
  console.log(arr);
  while (i < arr.length) {
    let j = arr[i];
    if (arr[i] < arr.length && arr[i] !== arr[j]) {
      //swap
      [arr[i], arr[j]] = [arr[j], arr[i]];
    } else {
      i += 1;
    }
  }
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== i) {
      return i;
    }
  }
};

console.log(missingNumber([4, 0, 3, 1]));

const findAllMissingNumbers = (arr) => {
  let i = 0;
  let missing = [];
  while (i < arr.length) {
    let j = arr[i] - 1;
    if (arr[i] !== arr[j]) {
      //swap
      [arr[i], arr[j]] = [arr[j], arr[i]];
    } else {
      i += 1;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== i + 1) {
      missing.push(i + 1);
    }
  }
  return missing;
};

console.log(
  `find all missingNumbers ${findAllMissingNumbers([2, 3, 1, 8, 2, 3, 5, 1])}`
);
