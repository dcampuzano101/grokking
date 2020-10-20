/*
Prompt: find the longest substring without any repeating characters

input = 'clementisacap'
output = 'mentisac'
*/

const noDuplicates = (str) => {
  let hash = {};
  for (let i = 0; i < str.length; i++) {
    char = str[i];
    if (!(char in hash)) {
      hash[char] = 0;
    }
    hash[char] += 1;
  }
  return Object.values(hash).every((value) => value === 1);
};
const longestSubstringWithoutDuplication = (string) => {
  let longest = "",
    windowStart = 0;

  for (let windowEnd = 0; windowEnd < string.length; windowEnd++) {
    let sub = string.slice(windowStart, windowEnd + 1);

    if (noDuplicates(sub)) {
      if (longest.length < sub.length) {
        longest = sub;
      }
    }

    if (windowEnd >= string.length - 1) {
      windowEnd = windowStart;
      windowStart += 1;
    }
  }
  return longest;
};

console.log(longestSubstringWithoutDuplication("clementisacap"));
