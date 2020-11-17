const getNthFibonacci = (n) => {
  const fibs = [0, 1];

  if (n === 2) {
    return fibs[1];
  } else if (n === 1) {
    return fibs[0];
  } else {
    return getNthFibonacci(n - 1) + getNthFibonacci(n - 2);
  }
};

console.log(getNthFibonacci(2));
console.log(getNthFibonacci(3));
console.log(getNthFibonacci(4));
console.log(getNthFibonacci(5));
console.log(getNthFibonacci(6));
console.log(getNthFibonacci(7));
