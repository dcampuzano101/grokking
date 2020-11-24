const productSum = (array, multiplier = 1) => {
  let sum = 0;

  for (const el of array) {
    if (Array.isArray(el)) {
      sum += productSum(el, multiplier + 1);
    } else {
      sum += el;
    }
  }
  return sum * multiplier;
};

console.log(productSum([5, 2, [7, -1], 3, [6, [-13, 8], 4]]));
