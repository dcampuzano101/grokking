class MinMaxStack {
  constructor() {
    this.minMaxStack = [];
    this.stack = [];
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  push(num) {
    const newMinMax = { min: num, max: num };

    if (this.minMaxStack.length) {
      const lastMinMax = this.minMaxStack[this.minMaxStack.length - 1];

      newMinMax.min = Math.min(lastMinMax.min, num);
      newMinMax.max = Math.max(lastMinMax.max, num);
    }
    this.minMaxStack.push(newMinMax);
    this.stack.push(num);
  }

  pop() {
    this.minMaxStack.pop();
    return this.stack.pop();
  }

  getMin() {
    return this.minMaxStack[this.minMaxStack.length - 1].min;
  }

  getMax() {
    return this.minMaxStack[this.minMaxStack.length - 1].max;
  }
}

const stack = new MinMaxStack();

stack.push(3);
console.log(stack.peek());
stack.push(5);
console.log(stack.getMin());
console.log(stack.getMax());
stack.push(1);
console.log(stack.getMin());
stack.pop();
console.log(stack);
