// Input  :  arr[] = {1, 2, 3, 4, 5, 6}
// Output : Root of the following tree
//                   1
//                  / \
//                 2   3
//                / \ /
//               4  5 6

// Input: arr[] = {1, 2, 3, 4, 5, 6, 6, 6, 6, 6}
// Output: Root of the following tree
//                    1
//                   / \
//                  2   3
//                 / \ / \
//                4  5 6  6
//               / \ /
//              6  6 6

// Definition of tree equality
// if all the node values and their positions in the tree are equal
// they are considered equal
// recursive definition -
// for every root/node roots are equal and left subtrees are equal and right subtrees are equal
// if node values are different we return false, if one subtree has more elements than other, we return false

function BinaryTree(root) {
  this.root = root;
}

BinaryTree.prototype.buildLevelOrderTree = function (arr) {
  //formula for locating children
  // take off the first element from the front of the array and create a node
  // make recursive call for left and right child
  // also check for index out of bound, both 2i+1 and 2i + 2 should be in range
  // if array is empty, return the root
  // if array.length === 1, create and return the node
  // if there are more elements create left  and sub tree sub tree
  this.root = this._buildHelper(this.root, arr, 0);
};

BinaryTree.prototype._buildHelper = function (root, arr, i) {
  // index >= arr.length return null;
  // for each value retrieved by index, create a new node
  // recursively call for left and right and assign, left and right to the new node
  // also pass, node's left and right to the recrusve call for the root
  // else recursively call the buildhelper with left and right

  if (i >= arr.length) {
    return null;
  } else {
    let data = arr[i];
    let node = new TreeNode(data, null, null);
    node.left = this._buildHelper(node.left, arr, 2 * i + 1);
    node.right = this._buildHelper(node.right, arr, 2 * i + 2);
    return node;
  }
};

BinaryTree.prototype.levelOrderTraversal = function (root) {
  if (root) {
    let queue = [];
    queue.push(root);
    while (queue.length) {
      let node = queue.shift();
      console.log(node.data);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }
};

BinaryTree.prototype.inorder = function (root) {
  // left, data/root, right
  if (root) {
    this.inorder(root.left);
    console.log(root.data);
    this.inorder(root.right);
  }
};

BinaryTree.prototype.preorder = function (root) {
  // root/data, left, right
  if (root) {
    console.log(root.data);
    this.preorder(root.left);
    this.preorder(root.right);
  }
};

BinaryTree.prototype.postorder = function (root) {
  // left, right, root/data
  if (root) {
    this.postorder(root.left);
    this.postorder(root.right);
    console.log(root.data);
  }
};

BinaryTree.prototype.height = function (root) {
  if (!root) return -1;
  let leftSubtreeHeight = this.height(root.left);
  let rightSubtreeHeight = this.height(root.right);
  let height =
    leftSubtreeHeight > rightSubtreeHeight
      ? leftSubtreeHeight
      : rightSubtreeHeight;
  return height + 1;
};

BinaryTree.prototype.size = function (root) {
  //size of a tree/node = size of left + size of right + 1
  if (!root) {
    return 0;
  }
  let leftTreeSize = this.size(root.left);
  let rightTreeSize = this.size(root.right);
  return leftTreeSize + rightTreeSize + 1;
};

function isEqual(root1, root2) {
  if (!root1 && !root2) {
    // trees are empty and empty trees are equal
    return true;
  }
  if (!root1 || !root2) {
    // either of them is null
    return false;
  }
  if (root1 && root2) {
    //check left subtrees are equal and right subtrees are equal and root is equal
    let leftSubtreeEqual = this.isEqual(root1.left, root2.left);
    let rightSubtreeEqual = this.isEqual(root1.right, root2.right);
    return leftSubtreeEqual && rightSubtreeEqual && root1.data === root2.data;
  }
}

//Lowest common ancestor LCA In BST
// LCA of two nodes is the lowest level node of which the two nodes are descendents
// where we treat a node as a descendent of itself
// LCA is the node where path to the descendents interesects
// Logic
// if node1.data < root.data && node2.data < root.data, LCA exists in left subtree
// if node1.data > root.data && node2.data > root.data, LCA exists in right subtree
// else current root is the LCA

//BST example
//                    6
//                  /   \
//                 2     7
//                / \     \
//               1   4     9
//                  / \    /
//                 3   5  8

function createBST() {
  let root = new TreeNode(6, null, null);
  let node2 = new TreeNode(2, null, null);
  let node7 = new TreeNode(7, null, null);
  let node1 = new TreeNode(1, null, null);
  let node4 = new TreeNode(4, null, null);
  let node9 = new TreeNode(9, null, null);
  let node3 = new TreeNode(3, null, null);
  let node5 = new TreeNode(5, null, null);
  let node8 = new TreeNode(8, null, null);

  // linking
  root.left = node2;
  root.right = node7;

  node2.left = node1;
  node2.right = node4;

  node7.right = node9;

  node4.left = node3;
  node4.right = node5;

  node9.left = node8;

  return root;
}

function LCA(root, data1, data2) {
  // there needs to be at least 2  nodes for meaningfully answering this question
  if (root && (root.left || root.right)) {
    if (root.data > data1 && root.data > data2) {
      // lca is in left subtree
      return LCA(root.left, data1, data2);
    } else if (root.data < data1 && root.data < data2) {
      // lca is in right subtree;
      return LCA(root.right, data1, data2);
    } else {
      // root is the lca
      return root.data;
    }
  } else {
    return null;
  }
}

function isBSTUtil(root, minValue, maxValue) {
  //checks whether a binary tree is a BST or not
  // a binary tree is a BST if
  // for every node, maxvalue in the left subtree is less than node's value ( or between -Infinity and node's value)
  // and maxvalue in right subtree is greater than node's value ( or between node's value and Infinity)
  if (!root) {
    return true;
  }

  if (
    root.data > minValue &&
    root.data < maxValue &&
    isBST(root.left, minValue, root.data) &&
    isBST(root.right, root.data, maxValue)
  ) {
    return true;
  } else {
    return false;
  }
}

function isBST(root) {
  return isBSTUtil(root, -Infinity, Infinity);
}

function isInorderBST(root, prevValue) {
  //inorder of bst returns a sorted list
  // next element in the traversal should be greater than previous one
  if (!root) {
    return true;
  }

  //   isInorderBST(root.left, prevValue);
  //   prevValue = root.data;
  //   isInorderBST(root.right, prevValue);
}

function insertIntoBST(root, val) {
  // in bst insertion nodes are always added as the leaf
  if (!root) return new TreeNode(val, null, null);
  //check whether val is less than root
  // if value is less than root, insert in left subtree
  // if value is greater than root, insert in right subtree

  if (val < root.data) {
    root.left = insertIntoBST(root.left, val);
  } else if (val > root.data) {
    root.right = insertIntoBST(root.right, val);
  }
  return root;
}

function findMinInBST(root) {
  if (!root) return root;
  while (root.left) {
    root = root.left;
  }
  return root;
}

function deleteInBST(root, val) {
  if (!root) return root;
  // find the node to be deleted
  if (val < root.data) {
    root.left = deleteInBST(root.left, val);
  } else if (val > root.data) {
    root.right = deleteInBST(root.right, val);
  } else {
    //found the match
    // case 1: no child
    if (!root.left && !root.right) root = null;
    // case 2: 1 child
    else if (!root.left) {
      root = root.right;
    } else if (!root.right) {
      root = root.left;
    } else {
      // case 3: 2 children
      // find min in the right subtree and copy the value on to the root
      let minNode = findMinInBST(root.right);
      root.data = minNode.data;
      // delete the duplicate node
      root.right = deleteInBST(root.right, minNode.data);
    }
  }
  return root;
}

let bst = createBST();
let result = LCA(bst, 3, 5);

console.log("LCA of 3, 5", result);
console.log("IS BST", isBST(bst));
let data = [1, 2, 3, 4, 5, 6];
let bt = new BinaryTree(null);
let bt2 = new BinaryTree(null);

bt.buildLevelOrderTree(data);
bt2.buildLevelOrderTree(data);
bt.levelOrderTraversal(bt.root);
console.log("inorder");
bt.inorder(bt.root); //4 2 5 1 6 3
console.log("preorder");
bt.preorder(bt.root); // 1 2 4 5 3 6
console.log("postorder");
bt.postorder(bt.root); // 4 5 2 6 3 1
console.log("height");
console.log(bt.height(bt.root));
console.log("size");
console.log(bt.size(bt.root));
console.log("bt === bt2 ", isEqual(bt.root, bt2.root));
