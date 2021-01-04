const branchSums = (root) => {
  const sums = [];
  calculateBranchSums(root, 0, sums);
  return sums;
};

const calculateBranchSums = (node, runningSum, sums) => {
  // base case:
  if (!node) return;

  // create newSum by increment sum by node's value
  const newSum = runningSum + node.value;

  // if node doesn't have any leafs, push the newSum into sums and return
  if (!node.left && !node.right) {
    sums.push(newSum);
    return;
  }

  // else
  // recursively call calculateBranchSums on each branch of the input node
  calculateBranchSums(node.left, newSum, sums);
  calculateBranchSums(node.right, newSum, sums);
};
