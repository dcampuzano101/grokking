/* 
Prompt: 
Input: 2 non empty arrays of integers (neg and pos)
Output: Pair of integers, one from each respective array, that have an absolute difference closest to 0

Ex: 
a1 = [-1, 5, 10, 20, 28, 3];
a2 = [26, 134, 135, 15, 17];

output = [28, 26]

-smallestPair = [], minDifference = Infinity
-sort each array
-place 2 pointers @ each start
-calculate currentDiff === 0 ? return [n1, n2]
-else increment pointer of smallerNum, bringing us closer to 0
if currentDiff < minDif, replace smallestPair and minDifference
*/

const smallestDifference = (arr1, arr2) => {
  let smallestPair = [],
    minDifference = Infinity,
    p1 = 0,
    p2 = 0;
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  while (p1 < arr1.length && p2 < arr2.length) {
    let num1 = arr1[p1];
    let num2 = arr2[p2];
    let currentDifference = Math.abs(num1 - num2);

    if (currentDifference === 0) {
      return [num1, num2];
    } else if (num1 < num2) {
      p1++;
    } else {
      p2++;
    }

    if (currentDifference < minDifference) {
      minDifference = currentDifference;
      smallestPair = [num1, num2];
    }
  }
  return smallestPair;
};
let a1 = [-1, 5, 10, 20, 28, 3];
let a2 = [26, 134, 135, 15, 17];

console.log(smallestDifference(a1, a2));
