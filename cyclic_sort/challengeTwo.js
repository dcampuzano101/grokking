/* 
Find the Smallest Missing Positive Number (medium) #
Given an unsorted array containing numbers, find the smallest missing positive number in it.

Example 1:

Input: [-3, 1, 5, 4, 2]
Output: 3
Explanation: The smallest missing positive number is '3'

*/

const challengeTwo = (arr) => {
  //input = unsorted integers containing both neg and pos numbers
  //output = smallest missing positive integer

  let i = 0;

  while (i < arr.length) {
    let j = arr[i] - 1;
    if (arr[i] < arr.length && arr[i] !== arr[j]) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    } else {
      i += 1;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== i + 1) {
      return i + 1;
    }
  }
};
console.log(challengeTwo([3, -2, 0, 1, 2]));
