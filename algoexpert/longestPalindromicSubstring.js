/*
Prompt: Find longest palindromic substring

input = "abaxyzzyxf";
output = "xyzzyx";

*/

const longestPalindrome = (str) => {
  let longest = "",
    windowStart = 0;

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    let sub = str.slice(windowStart, windowEnd + 1);

    let reversed = sub.split("").reverse().join("");

    if (reversed === sub) {
      longest = longest.length <= sub.length ? sub : longest;
    }

    if (windowEnd >= str.length - 1) {
      windowEnd = windowStart;
      windowStart += 1;
    }
  }
  return longest;
};

let input = "abaxyzzyxf";

console.log(longestPalindrome(input));
