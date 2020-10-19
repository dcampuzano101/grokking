/* 
Problem Statement #
We are given an array containing ‘n’ objects. 
Each object, created is assigned a unique number from 1 to ‘n’ based on their creation sequence. 
This means that the object with sequence number ‘3’ 
was created just before the object with sequence number ‘4’.

Write a function to sort the objects in-place on their creation sequence number in O(n)O(n) 
and without any extra space. 
For simplicity, let’s assume we are passed an integer array containing only the sequence numbers, 
though each number is actually an object.

Example 1:

Input: [3, 1, 5, 4, 2]
Output: [1, 2, 3, 4, 5]
*/

/*
first loop:
[3,1,5,4,2]
i = 0
arr[i] = 3
j = 2
arr[j] = 5
[5,1,3,4,2]
--
[5,1,3,4,2]
i = 0
arr[i] = 5
j = 4
arr[j] = 2
[2,1,3,4,5]
--
[2,1,3,4,5]
i = 0
arr[i] = 2
j = 1
arr[j] = 1
[1,2,3,4,5]
--
[1,2,3,4,5]
i = 0
arr[i] = 1
j = 0
arr[j] = 1
--
[1,2,3,4,5]
i = 1
arr[i] = 2
j = 1
arr[j] = 2
[1,2,3,4,5]
--
[1,2,3,4,5]
i = 2
arr[i] = 3
j = 2
arr[j] = 3
[1,2,3,4,5]
*/
const array = [3, 1, 5, 4, 2];

const cyclicSort = (arr) => {
  let i = 0;
  while (i < arr.length) {
    let j = arr[i] - 1;
    if (arr[i] !== arr[j]) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    } else {
      i++;
    }
  }
  return arr;
};

console.log(cyclicSort(array));
