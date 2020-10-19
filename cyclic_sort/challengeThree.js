/*
Find the First K Missing Positive Numbers (hard) #
Given an unsorted array containing numbers and a number ‘k’, 
find the first ‘k’ missing positive numbers in the array.

Example 1:

Input: [3, -1, 4, 5, 5], k=3
Output: [1, 2, 6]
Explanation: The smallest missing positive numbers are 1, 2 and 6.
*/

const challengeThree = (arr, k) => {
  let i = 0,
    result = [];
  while (i < arr.length) {
    let j = arr[i] - 1;
    if (arr[i] > 0 && arr[i] <= arr.length && arr[i] !== arr[j]) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    } else {
      i += 1;
    }
  }
  let extraNums = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (result.length < k) {
      if (arr[i] !== i + 1) {
        result.push(i + 1);
        extraNums.add(arr[i]);
      }
    }
  }

  i = 1;
  while (result.length < k) {
    let possibleNumber = i + arr.length;
    if (!extraNums.has(possibleNumber)) {
      result.push(possibleNumber);
    }
    i += 1;
  }
  return result;
};

console.log(challengeThree([3, -1, 4, 5, 5], 3));
