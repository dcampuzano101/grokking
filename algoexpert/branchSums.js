const branchSums = (root) => {
  const sums = [];
  calculateBranchSums(root, 0, sums);
  return sums;
};

const calculateBranchSums = (node, runningSum, sums) => {
  if (!node) return;
  const newSum = runningSum + node.value;
  if (!node.left && !node.right) {
    sums.push(newSum);
    return;
  }
  calculateBranchSums(node.left, newSum, sums);
  calculateBranchSums(node.right, newSum, sums);
};
