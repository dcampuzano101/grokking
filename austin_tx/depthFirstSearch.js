const depthFirstSearch = (array) => {
  array.push(this.name);
  for (let i = 0; i < this.children.length; i++) {
    this.children[i].depthFirstSearch(array);
  }
  return array;
};
