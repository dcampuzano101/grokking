const callBack = (x, y) => {
  result = x < y ? -1 : x > y ? 1 : 0;
  return result;
};

const merge = (left, right, cb) => {
  let merged = [];

  while (left.length && right.length) {
    switch (cb(left[0], right[0])) {
      case -1:
        merged.push(left.shift());
        break;
      case 1:
        merged.push(right.shift());
        break;
      case 0:
        merged.push(left.shift());
        break;
    }
  }
  return merged.concat(left, right);
};
const mergeSort = (arr, cb) => {
  if (arr.length <= 1) return arr;
  if (!cb) cb = callBack;

  let midPoint = Math.floor(arr.length / 2);

  let left = arr.slice(0, midPoint);
  let right = arr.slice(midPoint);

  let leftSorted = mergeSort(left, cb);
  let rightSorted = mergeSort(right, cb);

  return merge(leftSorted, rightSorted, cb);
};

console.log(mergeSort([8, 5, 2, 9, 5, 6, 3]));
