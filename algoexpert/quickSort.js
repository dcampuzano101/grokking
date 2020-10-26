/*
input =  [8, 5, 2, 9, 5, 6, 3]
output = [2 ,3 ,5 ,5 ,6 ,8, 9]
*/

const callback = (x, y) => {
  result = x < y ? -1 : 1;
  return result;
};

const quickSort = (arr, cb) => {
  if (!cb) {
    cb = callback;
  }

  if (arr.length < 2) {
    return arr;
  }

  let pivot = arr[0];

  let left = arr.slice(1).filter((el) => cb(el, pivot) === -1);
  let right = arr.slice(1).filter((el) => cb(el, pivot) > -1);

  left = quickSort(left, cb);
  right = quickSort(right, cb);

  return left.concat([pivot]).concat(right);
};

console.log(quickSort([8, 5, 2, 9, 5, 6, 3]));
