const branchSums = (tree) => {
  const sums = [];
  calculateBranchSums(tree, 0, sums);
  return sums;
};

const calculateBranchSums = (node, runningSum, sums) => {
  if (!node) return;

  const newSum = runningSum + node.value;

  if (!node.left && !node.right) {
    sums.push(newSum);
  }

  calculateBranchSums(node.left, newSum, sums);
  calculateBranchSums(node.right, newSum, sums);
};
