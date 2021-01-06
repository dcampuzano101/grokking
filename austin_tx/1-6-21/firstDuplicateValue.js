const firstDuplicateValue = (array) => {
  const nums = {};

  for (let i = 0; i < array.length; i++) {
    if (nums[array[i]]) {
      return array[i];
    }

    nums[array[i]] = true;
  }
  return -1;
};
