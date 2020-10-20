/*
Prompt: 
given an unsorted array, find the smallest subarray when sorted sorts the entire array
return startIndex, endIndex of smallestSubarray

Input: [ 1,  2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19 ];
Output: [ 3, 9 ];
*/

const smallestSubarrayToSort = (arr) => {
  let low = 0,
    high = arr.length - 1;

  while (low < arr.length - 1 && arr[low] <= arr[low + 1]) {
    low++;
  }

  if (low === arr.length - 1) return [-1, -1];

  while (high > 0 && arr[high] >= arr[high - 1]) {
    high--;
  }

  let subarrayMin = Infinity,
    subarrayMax = -Infinity;

  for (let i = low; i < high + 1; i++) {
    subarrayMax = Math.max(arr[i], subarrayMax);
    subarrayMin = Math.min(arr[i], subarrayMin);
  }

  while (low > 0 && subarrayMin < arr[low - 1]) low--;
  while (high < arr.length - 1 && subarrayMax > arr[high + 1]) high++;

  return [low, high];
};

let array = [1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19];

console.log(smallestSubarrayToSort(array));
