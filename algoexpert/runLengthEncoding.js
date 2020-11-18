const runLengthEncoding = (string) => {
  const encodedStringCharacters = [];

  let currentRunLength = 1;

  for (let i = 1; i < string.length; i++) {
    const currentChar = string[i];
    const prevChar = string[i - 1];

    if (currentChar !== prevChar || currentRunLength === 9) {
      encodedStringCharacters.push(currentRunLength.toString());
      encodedStringCharacters.push(prevChar);
      currentRunLength = 0;
    }
    currentRunLength++;
  }
  encodedStringCharacters.push(currentRunLength.toString());
  encodedStringCharacters.push(string[string.length - 1]);
  return encodedStringCharacters.join("");
};

console.log(runLengthEncoding("AAAAAAAAAAAAABBCCCCDD"));
console.log(runLengthEncoding("aA"));
console.log(runLengthEncoding("aAaAaaaaaAaaaAAAABbbbBBBB"));
