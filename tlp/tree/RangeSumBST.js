//[10,5,15,3,7,null,18]
//7
//15
//       10
//     /    \
//    5     15
//   / \      \
//  3   7     18
var rangeSumBST = function (root, L, R) {
  if (!root) return 0;
  let leftSum = rangeSumBST(root.left, L, R);
  let rightSum = rangeSumBST(root.right, L, R);
  return leftSum + rightSum + (root.val >= L && root.val <= R ? root.val : 0);
};
