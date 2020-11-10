const groupAnagrams = (stringArray) => {
  const anagrams = {};

  for (const word of words) {
    let sortedWord = word.split("").sort().join("");

    if (sortedWord in anagrams) {
      anagrams[sortedWord].push(word);
    } else {
      anagrams[sortedWord] = [word];
    }
  }
  return Object.values(anagrams);
};

const words = ["yo", "act", "flop", "cat", "tac", "oy", "olfp", "foo"];

console.log(groupAnagrams(words));
