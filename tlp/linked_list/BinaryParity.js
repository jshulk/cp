function BinaryParity(list) {
  this.list = list;
}

BinaryParity.prototype.iterative = function () {
  let countOfOnes = 0;
  let root = this.list.root;
  while (root) {
    countOfOnes += root.data === "1" ? 1 : 0;
    root = root.next;
  }
  return countOfOnes % 2 !== 0;
};

BinaryParity.prototype.recursive = function () {
  return this._recursiveHelper(this.list.root);
};

BinaryParity.prototype._recursiveHelper = function (root) {
  if (!root) {
    return false;
  }
  let restParity = this._recursiveHelper(root.next);
  return (
    (!restParity && root.data === "1") || (restParity && root.data !== "1")
  );
};

let list = new List();
list.buildList(["0", "1", "0", "1", "1"]);
let bp = new BinaryParity(list);
console.log("bp iterative: " + bp.iterative());
console.log("bp recursive: " + bp.recursive());
