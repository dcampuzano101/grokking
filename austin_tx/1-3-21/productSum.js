const productSum = (array, multiplier = 1) => {
  // input = [5, 2, [7, -1], 3, [6, [-13, 8], 4]];
  // output = 12 .. 5 + 2 + 2 * (7 - 1) + 3 + 2 * (6 + 3 * (-13 + 8) + 4)

  //we begin by passing the function an optional parameter of a multiplier
  //we instantiate a sum variable and iterate through the array
  //while iterating through the array we check to see if the element is a number or an array
  //if it is a number we add it to the sum, if it is an array, recursively call productSum on the array and increment the multiplier += 1 and add it the sum
  //once we have traversed the array we multiply the sum by the multiplier

  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      sum += productSum(array[i], multiplier + 1);
    } else {
      sum += array[i];
    }
    return sum * multiplier;
  }
};
