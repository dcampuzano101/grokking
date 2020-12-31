const findClosestValueInBst = (tree, target) => {
  return findClosestValueInBstHelper(tree, target, tree.value);
};
const findClosestValueInBstHelper = (tree, target, closest) => {
  if (tree === null) return closest;

  if (Math.abs(tree.value - target) < Math.abs(target - closest)) {
    closest = tree.value;
  }

  if (target < tree.value) {
    return findClosestValueInBstHelper(tree.left, target, closest);
  } else if (target > tree.value) {
    return findClosestValueInBstHelper(tree.right, target, closest);
  } else {
    return closest;
  }
};
