class Node {

  constructor(data) {
    this.data = data
    this.next = null
  }

  setNextNode(node) {
    // Data must be a Node, also cannot be a null as others previous Nodes (Singly and Doubly Linked List)
    if (!(node instanceof Node)) throw new Error('Next node must be a member of the Node class')
    this.next = node
  }

  // With this method, you are not ensuring that "next node" is a instance of Node
  // setNext(data) {
  //   this.next = data
  // }

  getNextNode() {
    return this.next
  }
}

module.exports = Node;

// const test = new Node('First')
// console.log(test)
// test.setNextNode(new Node(2))
// console.log(test)
// console.log(test.getNextNode())
// test.setNext(3)
// console.log(test)