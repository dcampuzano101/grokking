const runLength = (string) => {
  let counter = 1;
  let result = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== string[i + 1] || counter === 9) {
      result = `${counter}${string[i]}`;
      counter = 1;
    } else {
      counter++;
    }
  }
  return result;
};
