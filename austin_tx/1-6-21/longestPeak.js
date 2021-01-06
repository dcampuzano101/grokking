const longestPeak = (array) => {
  let maxPeak = 0;
  let i = 1;
  while (i < array.length - 1) {
    const isPeak = array[i - 1] < array[i] && array[i + 1] < array[i];

    if (!isPeak) {
      i++;
      continue;
    }

    let leftIndex = i - 2;

    while (leftIndex >= 0 && array[leftIndex] < array[leftIndex + 1]) {
      leftIndex--;
    }
    let rightIndex = i + 1;
    while (
      rightIndex < array.length &&
      array[rightIndex] < array[rightIndex - 1]
    ) {
      rightIndex++;
    }

    const currentPeakLength = rightIndex - leftIndex - 1;
    maxPeak = Math.max(maxPeak, currentPeakLength);
    i = rightIndex;
  }
  return maxPeak;
};
