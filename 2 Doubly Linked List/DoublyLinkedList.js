const Node = require('./Node');

class DoublyLinkedList {

  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToHead(data) {

    const newHead = new Node(data);
    const currentHead = this.head;

    // If there are one or more Nodes
    if (currentHead) {
      currentHead.setPreviousNode(newHead);
      newHead.setNextNode(currentHead);
    }

    this.head = newHead;

    // If tail is empty
    if (!this.tail) this.tail = newHead;

  }

  addToTail(data) {

    const newTail = new Node(data);
    const currentTail = this.tail;

    // If there is one Node, it is both head and tail.
    if (currentTail) {
      currentTail.setNextNode(newTail);
      newTail.setPreviousNode(currentTail);
    }

    this.tail = newTail;

    // If head is empty
    if (!this.head) this.head = newTail;

  }

  removeHead() {

    const removedHead = this.head;

    if (!removedHead) { // If List empty, return null
      return;
    } else { // If there is a Node, update `this.head` with next Node
      this.head = removedHead.getNextNode();
    }

    // If there is a node (if `this.head` wasn't the tail too) AFTER update `this.head` in previous else statement
    if (this.head) this.head.setPreviousNode(null);
    
    // If there is just one Node and their data are the same (data, next, previous)
    if (removedHead === this.tail) this.removeTail();

    return removedHead.data;

  }

  removeTail() {

    const removedTail = this.tail;

    if (!removedTail) { // If List is empty, return null
      return;
    } else { // If there is a Node, update `this.tail` with previous Node
      this.tail = removedTail.getPreviousNode();
    }

    // If List didn't have just one Node
    if (this.tail) this.tail.setNextNode(null);

    // If there is just one Node and their data are the same (data, next, previous)
    if (removedTail === this.head) this.removeHead();

    return removedTail.data;

  }

  removeByData(data) {

    let nodeToRemove;
    let currentNode = this.head;

    while (currentNode !== null) {
      if (currentNode.data === data) {
        nodeToRemove = currentNode;
        break;
      }
      currentNode = currentNode.getNextNode();
    }

    // If there wasn't such a data, return null;
    if (!nodeToRemove) return null;

    if (nodeToRemove === this.head) {
      this.removeHead();
    } else if (nodeToRemove === this.tail) {
      this.removeTail();
    } else {
      const nextNode = nodeToRemove.getNextNode();
      const previousNode = nodeToRemove.getPreviousNode();
      nextNode.setPreviousNode(previousNode);
      previousNode.setNextNode(nextNode);
    }

    return nodeToRemove.data;

  }

  printList() {
    let currentNode = this.head;
    let output = '<head> ';
    while (currentNode !== null) {
      output += currentNode.data + ' ';
      currentNode = currentNode.getNextNode();
    }
    output += '<tail>';
    console.log(output);
  }

}


module.exports = DoublyLinkedList;