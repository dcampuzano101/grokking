const binarySearch = (array, target) => {
  // return element of the target, if not present return -1

  // in order for bSearch to work, we must begin with a sorted array
  // we determine where the midPoint, then compare the middle element against the target
  // if the target > midPoint, we are only interested in the right side of the array
  // recursively call binarySearch on right side of the array

  // base case
  if (array.length === 0) return -1;

  let midPoint = Math.floor(array.length / 2);

  if (target > array[midPoint]) {
    const subResult = binarySearch(array.slice(midPoint), target);
    return subResult === -1 ? -1 : subResult + midPoint + 1;
  } else if (target < array[midPoint]) {
    return binarySearch(array.slice(0, midPoint), target);
  } else {
    return midPoint;
  }
};
