/*
  Given an array of integers between <span>1</span> and <span>n</span>,
  inclusive, where <span>n</span> is the length of the array, write a function
  that returns the first integer that appears more than once (when the array is
  read from left to right).


  In other words, out of all the integers that might occur more than once in the
  input array, your function should return the one whose first duplicate value
  has the minimum index.


  If no integer appears more than once, your function should return
  1

Note that you're allowed to mutate the input array
Sample Input #1
array = [2, 1, 5, 2, 3, 3, 4]

Sample Output #1
2 // 2 is the first integer that appears more than once.
*/

const firstDuplicateValue = (array) => {};

//////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
  Write a function that takes in an array of integers and returns the length of
  the longest peak in the array.

  A peak is defined as adjacent integers in the array that are strictly
  increasing until they reach a tip (the highest value in the peak), at which
  point they become strictly decreasing. At least three integers are required to
  form a peak.

  For example, the integers 1, 4, 10, 2 form a peak, but the
  integers 4, 0, 10 don't and neither do the integers
  1, 2, 2, 0. Similarly, the integers 1, 2, 3 don't
  form a peak because there aren't any strictly decreasing integers after the
  3.

Sample Input
array = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]

Sample Output
// 0, 10, 6, 5, -1, -3

*/

const longestPeak = (array) => {};

//////////////////////////////////////////////////////////////////////////////////////////////////////////
/*

Write a function that takes in an array of integers and returns a sorted
version of that array. Use the Bubble Sort algorithm to sort the array.


If you're unfamiliar with Bubble Sort, we recommend watching the Conceptual
Overview section of this question's video explanation before starting to code.

Sample Input
array = [8, 5, 2, 9, 5, 6, 3]
Sample Output
[2, 3, 5, 5, 6, 8, 9]

*/

const bubbleSort = (array) => {};

//////////////////////////////////////////////////////////////////////////////////////////////////////////
/*

Write a function that takes in two non-empty arrays of integers, finds the
pair of numbers (one from each array) whose absolute difference is closest to
zero, and returns an array containing these two numbers, with the number from
the first array in the first position.


Note that the absolute difference of two integers is the distance between
them on the real number line. For example, the absolute difference of -5 and 5
is 10, and the absolute difference of -5 and -4 is 1.


You can assume that there will only be one pair of numbers with the smallest
difference.

Sample Input
arrayOne = [-1, 5, 10, 20, 28, 3]
arrayTwo = [26, 134, 135, 15, 17]

Sample Output:
[28, 26]
*/

const smallestDifference = (arrayOne, arrayTwo) => {};

//////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Write a function that take in a non-empty array of integers 
and returns an array of the same length,
where each element in the output array is equal to the product of every other number in the input array 
*/

const arrayOfProducts = (array) => {};

//////////////////////////////////////////////////////////////////////////////////////////////////////////
/*

You're given an array of integers and an integer. Write a function that moves
all instances of that integer in the array to the end of the array and returns
the array.


The function should perform this in place (i.e., it should mutate the input
array) and doesn't need to maintain the order of the other integers.

Input:
array = [2, 1, 2, 2, 2, 3, 4, 2]
toMove= 2

Sample Output
[1, 3, 4, 2, 2, 2, 2, 2] // the numbers 1, 3, and 4 could be ordered differently</span>

*/

const moveElementToEnd = (array, target) => {};

//////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Sorted array of integers and target integer
use binarySearch algorithm

return index of target or -1
*/

const binarySearch = (array, target) => {};

//////////////////////////////////////////////////////////////////////////////////////////////////////////
/*

  Write a function that takes in a Binary Search Tree (BST) and a target integer
  value and returns the closest value to that target value contained in the BST.

  You can assume that there will only be one closest value.

  Each BST node has an integer value, a
  left child node, and a right child node. A node is
  said to be a valid BST node if and only if it satisfies the BST
  property: its value is strictly greater than the values of every
  node to its left; its value is less than or equal to the values
  of every node to its right; and its children nodes are either valid
  BST nodes themselves or None / null.
Sample Input tree:  
          10
       /     \
      5      15
    /   \   /   \
   2     5 13   22
 /           \
1            14

*/

const findClosestValueInBst = (tree, target) => {};

//////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Write a function that takes in a non-empty array of distinct integers and an
integer representing a target sum. The function should find all triplets in
the array that sum up to the target sum and return a two-dimensional array of
all these triplets. The numbers in each triplet should be ordered in ascending
order, and the triplets themselves should be ordered in ascending order with
respect to the numbers they hold.


If no three numbers sum up to the target sum, the function should return an
  empty array.

Sample Input
array = [12, 3, 1, 2, -6, 5, -8, 6]
targetSum = 0

Sample Output<
[[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]

*/

const threeNumberSum = (array, target) => {};

//////////////////////////////////////////////////////////////////////////////////////////////////////////
