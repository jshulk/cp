function TargetOccurence(list) {
  this.list = list;
}

TargetOccurence.prototype.iterative = function (target) {
  let targetCount = 0;
  let root = this.list.root;
  while (root) {
    if (root.data === target) targetCount++;
    root = root.next;
  }
  return targetCount;
};

TargetOccurence.prototype.recursive = function (target) {
  return this._recursiveHelper(this.list.root, target);
};

TargetOccurence.prototype._recursiveHelper = function (root, target) {
  if (!root) {
    return 0;
  }

  let restOccurences = this._recursiveHelper(root.next, target);
  return restOccurences + (root.data === target ? 1 : 0);
};
let nums = [1, 3, 6, 9, 0, 3, 6, 4, 2, 4, 6];
let list = new List();
list.buildList(nums);
let ta = new TargetOccurence(list);

console.log("ta iterative : 6", ta.iterative(6));
console.log("ta recursive : 6", ta.recursive(6));
