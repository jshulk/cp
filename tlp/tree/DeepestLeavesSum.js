// Given a binary tree return the sum of deepest leaves
//         1
//       /    \
//      2      3
//    /  \      \
//   4    5      6
//  /             \
// 7               8
// output = 7+8 = 15

// Approach 1
// Traverse level by level and at each level sum up all the nodes on that level
// after each level is traversed reset the sum
// finally we will end up with the sum of last level nodes

// Approach 2
// Find maxDepth/height of the tree
// maintain a level variable, and pass level + 1 to left and right child
// at each iteration, check level === maxDepth
// if level === maxDepth, then add the nodes at that level and return the sum
// else return 0 as sum
// finally add up the left and right subtree sums and return
// also the when there is one node, that node itself will give the sum
// if root is null, sum = 0

// Approach 3
// Don't calculate maxDepth, explicitly and use 2 variables, one for maxDepth and another for level
// in each iteration check if level === maxDepth, calculate the sum
// if level ? maxDepth, maxDepth = level and reset the sum to the sum of nodes at that level
// might require the maintenance of maxDepth variable outside the function call stack

//Approach 4
// Calculate the level of a node along with it's value and return that instead of just the value
// case 1: node is a leaf node, ie left and right are null, return the node's value and level+1
//case 2: node has both left and right children
// recursively call for left and right child and get the result
// compare the max depth of left and right subtree and return the tuple with maxdepth
// if depth is same add the values and return the tuple with max depth
// case 3: only left  child
// return the recursive call for left child
// case 4: only right child
// return recursive call for right child

//         1
//       /    \
//      2      3
//    /  \      \
//   4    5      6
//  /             \
// 7               8
// output = 7+8 = 15

function dlsDFSWithTuple(root) {
  if (!root) return 0;
  return dlswithTupleHelper(root, 0)[0];
}

function dlswithTupleHelper(root, level) {
  if (!root.left && !root.right) {
    return [root.val, level];
  } else if (root.left && root.right) {
    let leftTuple = dlswithTupleHelper(root.left, level + 1);
    let rightTuple = dlswithTupleHelper(root.right, level + 1);
    if (leftTuple[1] > rightTuple[1]) return leftTuple;
    else if (leftTuple[1] < rightTuple[1]) {
      return rightTuple;
    } else return [leftTuple[0] + rightTuple[0], leftTuple[1]];
  } else if (!root.right) {
    return dlswithTupleHelper(root.left, level + 1);
  } else if (!root.left) {
    return dlswithTupleHelper(root.right, level + 1);
  }
}

function dlsDFSImplicitMaxDepth(root) {
  if (!root) return 0;
  return dlsDFSImplicitMaxDepthHelper(root, 0, -1);
}
//TODO
function dlsDFSImplicitMaxDepthHelper(root, level, maxDepth, levelSum) {
  if (!root) return 0;

  if (level === maxDepth) {
    levelSum = root.val;
  } else if (level > maxDepth) {
    maxDepth = level;
    levelSum += root.val;
  }
  let leftSum = dlsDFSImplicitMaxDepthHelper(
    root.left,
    level + 1,
    maxDepth,
    levelSum
  );
  let rightSum = dlsDFSImplicitMaxDepthHelper(
    root.right,
    level + 1,
    maxDepth,
    levelSum
  );

  return leftSum + rightSum;
}

var deepestLeavesSum = function (root) {
  return deepestLeavesSumBFS(root);
};

function deepestLeavesSumBFS(root) {
  if (!root) return 0;
  let queue = [root];
  let deepestSum = 0;
  while (queue.length) {
    deepestSum = 0;
    let size = queue.length; //2
    for (let i = 0; i < size; i++) {
      let node = queue.shift(); //2, 3
      deepestSum += node.data; // 2, 5
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right); //[4,5], [4,5,6]
    }
  }

  return deepestSum;
}

function findMaxDepth(root) {
  //maxdepth = height of tree
  // height of a node = Max(height of left, height of subtree) + 1;
  if (!root) return -1;

  let leftHeight = findMaxDepth(root.left);
  let rightHeight = findMaxDepth(root.right);
  let maxHeight = Math.max(leftHeight, rightHeight);
  return maxHeight + 1;
}

function deepestLeavesSumDFSWithMaxDepth(root) {
  if (!root) return 0;
  let maxDepth = findMaxDepth(root);
  return maxDepthSumHelper(root, 0, maxDepth);
}

function maxDepthSumHelper(root, level, maxDepth) {
  if (!root) return 0;
  let leftSum = maxDepthSumHelper(root.left, level + 1, maxDepth);
  let rightSum = maxDepthSumHelper(root.right, level + 1, maxDepth);

  if (level === maxDepth) return root.val;

  return leftSum + rightSum;
}
