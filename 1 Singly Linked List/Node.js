class Node {

  constructor(data) {
    this.data = data;
    this.next = null;
  }

  setNextNode(node) {
    if (!(node instanceof Node || node === null)) throw new Error ('Next node must be a member of the Node class');
    this.next = node;
  }

  getNextNode() {
    return this.next;
  }

}

// TESTING
// First is the head and Third is the tail.

// const First = new Node('first');
// const Second = new Node('second');
// const Third = new Node('third');
// First.setNextNode(Second);
// Second.setNextNode(Third);

// console.log(First);
// console.log(Second.getNextNode());

module.exports = Node;