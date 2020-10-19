/* 
Problem Statement: 
We are given an unsorted array containing ‘n’ numbers taken from the range 1 to ‘n’. 
The array has some numbers appearing twice, find all these duplicate numbers without using any extra space.

Example 1:

Input: [3, 4, 4, 5, 5]
Output: [4, 5]
*/

//cyclic sort places elements/objects @ their correct index in terms of creation sequence.
//any numbers after being sorted that are out of place are duplicates, because their original is in it's correct spot.

const findDuplicates = (arr) => {
  let duplicates = [];
  let i = 0;

  while (i < arr.length) {
    let j = arr[i] - 1;
    if (arr[i] !== arr[j]) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    } else {
      i++;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== i + 1) {
      duplicates.push(arr[i]);
    }
  }
  return duplicates;
};

console.log(findDuplicates([3, 4, 4, 5, 5]));
