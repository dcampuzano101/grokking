const arrayOfProducts = (array) => {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    let current = array[i];
    let left = i - 1,
      right = i + 1;
    let product = 1;

    while (left >= 0) {
      product *= array[left];
      left--;
    }

    while (right <= array.length - 1) {
      product *= array[right];
      right++;
    }
    result[i] = product; // result.push(product)
  }
  return result;
};

console.log(arrayOfProducts([5, 1, 4, 2]));
