function CalculateSum(list) {
  this.list = list;
}

CalculateSum.prototype.iterative = function iterative() {
  let sum = 0;
  let root = this.list.root;
  while (root) {
    sum += root.data > 0 ? root.data : 0;
    root = root.next;
  }
  return sum;
};

CalculateSum.prototype.recursive = function recursive() {
  return this._recursiveHelper(this.list.root);
};

CalculateSum.prototype._recursiveHelper = function (root) {
  if (!root) {
    return 0;
  }
  let restSum = this._recursiveHelper(root.next);
  return restSum + (root.data > 0 ? root.data : 0);
};

let nums = [1, 2, -3, 4, 5, -6];
let list = new List();
list.buildList(nums);
let cm = new CalculateSum(list);

console.log("iterativeSum", cm.iterative());
console.log("recursiveSum", cm.recursive());
