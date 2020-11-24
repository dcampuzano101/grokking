const balancedBrackets = (string) => {
  const brackets = {
    "[": "]",
    "{": "}",
    "(": ")",
  };
  const stack = [];
  const bracketArr = ["[", "]", "{", "}", "(", ")"];

  for (let i = 0; i < string.length; i++) {
    let curr = string[i];

    if (curr in brackets) {
      stack.push(curr);
    } else if (bracketArr.indexOf(curr) >= 0) {
      let lastBracket = stack.pop();
      if (brackets[lastBracket] !== curr) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

console.log(balancedBrackets("([])(){}(())()()"));

console.log(balancedBrackets("()[]{}{"));

console.log(balancedBrackets("(((((({{{{{[[[[[([)])]]]]]}}}}}))))))"));

console.log(balancedBrackets("()[]{}{"));
