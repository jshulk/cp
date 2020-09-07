function Node(data, next) {
  this.data = data;
  this.next = next;
}
function List(root) {
  this.root = root;
}
List.prototype.insert = function insert(root, data) {
  if (!root) {
    root = new Node(data, null);
  } else {
    let current = root;
    while (current.next) {
      current = current.next;
    }
    current.next = new Node(data, null);
  }

  return root;
};

List.prototype.buildList = function buildList(nums) {
  let root = this.root;
  for (let i = 0; i < nums.length; i++) {
    root = this.insert(root, nums[i]);
  }
  this.root = root;
  return this.root;
};
