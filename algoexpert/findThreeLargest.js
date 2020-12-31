const findThreeLargest = (array) => {
  let result = [-Infinity, -Infinity, -Infinity];

  for (let i = 0; i < array.length; i++) {
    if (array[i] > result[2]) {
      let temp = result[2];
      let temp2 = result[1];
      result[2] = array[i];
      result[1] = temp;
      result[0] = temp2;
    } else if (array[i] > result[1]) {
      let temp = array[1];
      result[1] = array[i];
      result[0] = temp;
    } else if (array[i] > result[0]) {
      result[0] = array[0];
    }
  }
  return result;
};
