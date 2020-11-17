const threeNumberSort = (array, order) => {
  let count = {};

  for (let i = 0; i < array.length; i++) {
    let current = array[i];

    if (!(current in count)) {
      count[current] = 0;
    }
    count[current] += 1;
  }

  const first = order[0];
  const second = order[1];
  const third = order[2];

  let i = 0;

  while (count[first] > 0) {
    array[i] = first;
    count[first] -= 1;
    i++;
  }

  while (count[second] > 0) {
    array[i] = second;
    count[second] -= 1;
    i++;
  }

  while (count[third] > 0) {
    array[i] = third;
    count[third] -= 1;
    i++;
  }

  return array;
};

console.log(threeNumberSort([1, 0, 0, -1, -1, 0, 1, 1], [0, 1, -1]));

console.log(threeNumberSort([7, 8, 9, 7, 8, 9, 9, 9, 9, 9, 9, 9], [8, 7, 9]));
