const longestPeak = (arr) => {
  let maxPeak = 0;
  let peak;
  i = 1;

  while (i < arr.length - 1) {
    let isPeak = arr[i] > arr[i - 1] && arr[i] > arr[i + 1];

    if (!isPeak) {
      i++;
      continue;
    }

    let left = i - 2,
      right = i + 2;

    while (left >= 0 && arr[left] < arr[left + 1]) {
      left--;
    }
    while (right < arr.length && arr[right] < arr[right - 1]) {
      right++;
    }

    peak = arr.slice(left + 1, right);
    currentPeak = right - left - 1;
    maxPeak = Math.max(currentPeak, maxPeak);
    i = right;
  }
  console.log(peak);
  return maxPeak;
};

let sample = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3];

console.log(longestPeak(sample));
