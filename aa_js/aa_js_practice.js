// Write a recursive function, `factorialsRec(num)`, that returns the first
// `num` factorial numbers. Note that the 1st factorial number is 0!, which
// equals 1. The 2nd factorial is 1!, the 3rd factorial is 2!, etc.
const recursiveFactorial = (num) => {
  if (num === 1) return [1];

  const facts = factorialsRec(num - 1);
  facts.push(facts[facts.length - 1] * (num - 1));
  return facts;
};

// Write a function `myReverse(array)` which returns the array in reversed
// order. Do NOT use the built-in `Array.prototype.reverse`.
// ex. myReverse([1,2,3]) => [3,2,1]

const myReverse = (arr) => {
  let result = [];

  let i = arr.length - 1;
  while (i > 0) {
    result.push(arr[i]);
    i--;
  }
  return result;
};

// Write a `String.prototype.symmetricSubstrings` method that returns an array
// of substrings which are palindromes in alphabetical order. Only include
// substrings of length > 1.
// e.g. "cool".symmetricSubstrings() => ["oo"]

String.prototype.symmetricSubstrings = () => {
  let symmetricSubs = [];
  let j = 0;
  for (let i = 0; i < this.length; i++) {
    let sub = this.slice(j, i + 1);

    if (sub.length > 1 && sub === sub.split("").reverse().join("")) {
      symmetricSubs.push(sub);
    }

    if (i + j - 1 > this.length) {
      i = j;
      j = j + 1;
    }
  }
  return subs;
};

// Write an `Array.prototype.myEach(callback)` method that invokes a callback
// for every element in an array and returns undefined. Do NOT use the built-in
// `Array.prototype.forEach`.
Array.prototype.myEach = (callback) => {
  for (let i = 0; i < this.length; i++) {
    this[i] = callback(this[i]);
  }
};

// Write an `Array.prototype.myReduce(callback, acc)` method which takes a
// callback and an optional argument of a default accumulator. If myReduce only
// receives one argument, then use the first element of the array as the default
// accumulator. Use the `Array.prototype.myEach` method you defined above. Do
// NOT call in the built-in `Array.prototype.reduce` or `Array.prototype.forEach`
// methods.
Array.prototype.myReduce = (callback, acc) => {
  const array = this.slice();
  if (typeof acc === "undefined") {
    acc = array.shift();
  }

  array.myEach((el) => {
    acc = callback(el);
  });
  return acc;
};

// Write an `Array.prototype.bubbleSort(callback)` method, that bubble sorts an array.
// It should take an optional callback that compares two elements, returning
// -1 if the first element should appear before the second, 0 if they are
// equal, and 1 if the first element should appear after the second. Do NOT call
// the built-in `Array.prototype.sort` method in your implementation. Also, do NOT
// modify the original array.
//
// Here's a quick summary of the bubble sort algorithm:
//
// Iterate over the elements of the array. If the current element is unsorted
// with respect to the next element, swap them. If any swaps are made before
// reaching the end of the array, repeat the process. Otherwise, return the
// sorted array.

Array.prototype.bubbleSort = (callback) => {
  if (callback === undefined) {
    callback = (x, y) => {
      return x < y ? -1 : 1;
    };
  }

  let array = this.slice();
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < array.length - 1; i++) {
      let curr = arr[i];
      let next = arr[i + 1];

      if (callback(curr, next) === -1) {
        temp = curr;
        curr = next;
        next = temp;
        sorted = false;
      }
    }
  }
  return array;
};
