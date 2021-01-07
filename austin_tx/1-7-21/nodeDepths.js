const nodeDepths = (root) => {
  // we need a way to keep track of the depth,
  // since we are starting @ the root, we can assume that it is 0 levels deep

  const stack = [{ node: root, depth: 0 }];
  let sumOfDepths = 0;
  while (stack.length > 0) {
    let { node, depth } = stack.pop();
    if (!node) continue;
    sumOfDepths += depth;

    stack.push({ node: node.left, depth: depth + 1 });
    stack.push({ node: node.right, depth: depth + 1 });
  }
  return sumOfDepths;
};
