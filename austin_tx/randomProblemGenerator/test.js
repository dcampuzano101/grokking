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
Write a function that takes in an array of integers and returns a boolean
representing whether the array is monotonic.

An array is said to be monotonic if its elements, from left to right, are
entirely non-increasing or entirely non-decreasing.

Non-increasing elements aren't necessarily exclusively decreasing; they simply
don't increase. Similarly, non-decreasing elements aren't necessarily
exclusively increasing; they simply don't decrease.

Note that empty arrays and arrays of one element are monotonic.
Sample Input
    array = [-1, -5, -10, -1100, -1100, -1101, -1102, -9001]

Sample Output
    true
*/

const isMonotonic = (array) => {};

//////////////////////////////////////////////////////////////////////////////////////////////////////////
/*

  Write a function that takes in a Binary Tree and returns a list of its branch
  sums ordered from leftmost branch sum to rightmost branch sum.

  A branch sum is the sum of all values in a Binary Tree branch. A Binary Tree
  branch is a path of nodes in a tree that starts at the root node and ends at
  any leaf node.


  Each BinaryTree< node has an integer value, a
  left child node, and a right child node. Children
  nodes can either be BinaryTree nodes themselves or
          1
        /     \
       2       3
     /   \    /  \
    4     5  6    7
  /   \  /
 8    9 10
Sample Output
  [15, 16, 18, 10, 11]
15 == 1 + 2 + 4 + 8
16 == 1 + 2 + 4 + 9
18 == 1 + 2 + 5 + 10
10 == 1 + 3 + 6
11 == 1 + 3 + 7

*/

const branchSums = (root) => {};

//////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Given two non-empty arrays of integers, write a function that determines
whether the second array is a subsequence of the first one.

A subsequence of an array is a set of numbers that aren't necessarily adjacent
in the array but that are in the same order as they appear in the array. For
instance, the numbers [1, 3, 4] form a subsequence of the array
[1, 2, 3, 4], and so do the numbers [2, 4]. Note
that a single number in an array and the array itself are both valid
subsequences of the array.

Sample Input = [5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]
Sample Output = true

*/

const validSequence = (array, sequence) => {};

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
Write a function that takes in an array of at least three integers and,
without sorting the input array, returns a sorted array of the three largest
integers in the input array.

The function should return duplicate integers if necessary; for example, it
should return <span>[10, 10, 12]</span> for an input array of
<span>[10, 5, 9, 10, 12]</span>.

Sample Input
  array = [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]

Sample Output
  [18, 141, 541]
*/

const findThreeLargest = (array) => {};

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
