const twoSum = (arr, target) => {
  let nums = {};

  for (let i = 0; i < arr.length; i++) {
    let targetDiff = target - arr[i];

    if (nums[targetDiff]) {
      return [targetDiff, arr[i]];
    }
    nums[arr[i]] = true;
  }
  return [];
};
