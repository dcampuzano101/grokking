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

Write a function that takes in a non-empty string and that returns a boolean
representing whether the string is a palindrome.


A palindrome is defined as a string that's written the same forward and
backward. Note that single-character strings are palindromes.

Sample Input
  string = "abcdcba"
Sample Output
  true // it's written the same forward and backward
*/
const isPalindrome = (arr, target) => {};

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
Write a function that takes in an n x m two-dimensional array (that can be
square-shaped when n == m) and returns a one-dimensional array of all the
array's elements in spiral order.

Spiral order starts at the top left corner of the two-dimensional array, goes
to the right, and proceeds in a spiral pattern all the way until every element
has been visited.

Sample Input: 
array = [
  [1,   2,  3, 4],
  [12, 13, 14, 5],
  [11, 16, 15, 6],
  [10,  9,  8, 7],
]

Sample Output
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

*/

const spiralTraverse = (array) => {};

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
const insertionSort = (array) => {
  // we split the input array into two parts, the first part is always sorted,
  // and begins with one element
  // we instantiate two pointers, i = 1, j = 1
  // while j > 0 && arr[j] < arr[j-1]
  // we swap the elemnts and decrement j
  // continue iterating through the array, if we find an element out of place we run the swap

  for (let i = 1; i < array.length; i++) {
    let j = i;
    while (j > 0 && array[j] < array[j - 1]) {
      let swap = array[j];
      array[j] = array[j - 1];
      array[j - 1] = swap;
      j--;
    }
  }
  return array;
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Given a non-empty string of lowercase letters and a non-negative integer
representing a key, write a function that returns a new string obtained by
shifting every letter in the input string by k positions in the alphabet,
where k is the key.

Note that letters should "wrap" around the alphabet; in other words, the
letter <span>z</span> shifted by one returns the letter <span>a</span>.

Sample Input
string = "xyz"
key = 2
Sample Output
"zab"

*/

const caesarCipher = (string, key) => {};

//////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
  Write a function that takes in a non-empty array of distinct integers and an
  integer representing a target sum. If any two numbers in the input array sum
  up to the target sum, the function should return them in an array, in any
  order. If no two numbers sum up to the target sum, the function should return
  an empty array.
  Note that the target sum has to be obtained by summing two different integers
  in the array; you can't add a single integer to itself in order to obtain the
  target sum.
  You can assume that there will be at most one pair of numbers summing up to
  the target sum.
Sample Input
array = [3, 5, -4, 8, 11, 1, -1, 6]
targetSum = 10
Sample Output
[-1, 11] the numbers could be in reverse order

*/
const twoSum = (arr, target) => {};

//////////////////////////////////////////////////////////////////////////////////////////////////////////
/*

  Write three functions that take in a Binary Search Tree (BST) and an empty
  array, traverse the BST, add its nodes' values to the input array, and return
  that array. The three functions should traverse the BST using the in-order,
  pre-order, and post-order tree-traversal techniques, respectively.


  If you're unfamiliar with tree-traversal techniques, we recommend watching the
  Conceptual Overview section of this question's video explanation before
  starting to code.


  Each BST node has an integer value, a
  left child node, and a right child node. A node is
  said to be a valid BST node if and only if it satisfies the BST
  property: its value is strictly greater than the values of every
  node to its left; its value is less than or equal to the values
  of every node to its right; and its children nodes are either valid
  BST nodes themselves or None / null.

Sample Input
tree =   10
       /     \
      5      15
    /   \       \
   2     5       22
 /
1
array = []

Sample Output
inOrderTraverse: [1, 2, 5, 5, 10, 15, 22] // where the array is the input array
preOrderTraverse: [10, 5, 2, 1, 5, 15, 22] // where the array is the input array
postOrderTraverse: [1, 2, 5, 5, 22, 15, 10] // where the array is the input array

*/

const inOrderTraverse = (tree, array) => {};

const preOrderTraverse = (tree, array) => {};

const postOrderTraverse = (tree, array) => {};

//////////////////////////////////////////////////////////////////////////////////////////////////////////
