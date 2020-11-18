// Do not edit the class below except
// for the depthFirstSearch method.
// Feel free to add new properties
// and methods to the class.
class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
    array.push(this.name);
    for (const child of this.children) {
      child.depthFirstSearch(array);
    }
    return array;
  }
}

const example = new Node("example");

example.addChild("A");
example.addChild("B");
example.addChild("C");
example.addChild("D");

example.children[0].addChild("E");

console.log(example);
console.log(example.depthFirstSearch([]));

exports.Node = Node;
