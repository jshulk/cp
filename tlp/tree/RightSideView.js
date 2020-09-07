//        1
//       /  \
//      2    3
//       \  /
//       5  6

function BFSRightSideView(root) {
  if (!root) return [];
  let queue = [root];
  let output = [];
  // for every level take the rightmost node of that level
  while (queue.length) {
    let size = queue.length;
    for (i = 0; i < size; i++) {
      let node = queue.shift();
      if (i === size - 1) output.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  return output;
}
//Todo
function RightSideView(root) {
  // right side view
  // What will be visible ?
  // all the right most children
  // and left children whose depth is more than right most leaf node
  // this is variantion of deepest sum where we also select all the right most children
  // find the nodes in the left subtree whose depth > right subtrees height
  let output = [];
  let depth = -1;
  let node = root;
  while (node) {
    output.push(node.val);
    depth++;
    node = node.right;
  }
  //depth = 0, output = [1]

  let nodesGreaterthanRightsDepth = findNodesGreaterThanMaxDepth(
    root,
    0,
    depth
  );
  // find nodes in right tree that are right most
  // and the nodes in the right
  return output.concat(nodesGreaterthanRightsDepth);
}

function findMaxDepth(root) {
  if (!root) return -1;
  let leftMaxDepth = findMaxDepth(root.left);
  let rightMaxDepth = findMaxDepth(root.right);
  let max = Math.max(leftMaxDepth, rightMaxDepth);
  return max + 1;
}

function findNodesGreaterThanMaxDepth(root, depth, maxDepth) {
  //depth = 0, maxDepth = 0
  if (!root) return [];

  let leftOutput = findNodesGreaterThanMaxDepth(root.left, depth + 1, maxDepth); // 2, depth = 1
  let rightOutput = findNodesGreaterThanMaxDepth(
    root.right,
    depth + 1,
    maxDepth
  );

  if (depth > maxDepth) {
    return leftOutput.concat(rightOutput).concat([root.val]);
  } else {
    return leftOutput.concat(rightOutput);
  }
}
