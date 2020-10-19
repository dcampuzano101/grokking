/*
Find the Corrupt Pair (easy) 
We are given an unsorted array containing ‘n’ numbers taken from the range 1 to ‘n’. 
The array originally contained all the numbers from 1 to ‘n’, but due to a data error, 
one of the numbers got duplicated which also resulted in one number going missing. 
Find both these numbers.

Example 1:

Input: [3, 1, 2, 5, 2]
Output: [2, 4]
Explanation: '2' is duplicated and '4' is missing.


find the duplicate and find the missing number
*/

const bruteFindCorruptPair = (arr) => {
  let i = 0;
  let result = [];
  while (i < arr.length) {
    if (arr[i] !== i + 1) {
      j = arr[i] - 1;
      if (arr[i] !== arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      } else {
        if (result[0] === arr[i]) {
          i += 1;
          continue;
        }
        result.push(arr[i]);
      }
    } else {
      i += 1;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== i + 1) {
      result.push(i + 1);
    }
  }

  return result;
};

const findCorruptPair = (arr) => {
  let i = 0;
  while (i < arr.length) {
    let j = arr[i] - 1;
    if (arr[i] !== arr[j]) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    } else {
      i += 1;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== i + 1) {
      return [arr[i], i + 1];
    }
  }
};

console.log(findCorruptPair([3, 1, 2, 5, 2]));
