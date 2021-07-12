const Node = require('./Node');

class LinkedList {

  constructor() {
    this.head = null;
  }

  addToHead(data) {
    const newHead = new Node(data);
    const currentHead = this.head;
    this.head = newHead;
    if (currentHead) newHead.setNextNode(currentHead);
  }

  addToTail(data) {
    let tail = this.head;
    if (!tail) {

      this.head = new Node(data);

    } else {

      while (tail.getNextNode() !== null) {
        tail = tail.getNextNode();
      }
      tail.setNextNode(new Node(data));

    }
  }

  removeHead() {
    const removedHead = this.head;
    if (!removedHead) return null;
    this.head = removedHead.getNextNode();
    return removedHead.data;
  }

  printList() {
    let currentNode = this.head;
    let outPut = '<head> ';
    while (currentNode !== null) {
      outPut += `${currentNode.data} `;
      currentNode = currentNode.getNextNode();
    }
    outPut += '<tail>';
    console.log(outPut);
  }

}

// TEST Linked List

// const seasons = new LinkedList();

// seasons.addToTail(1);
// seasons.addToTail(2);
// seasons.addToTail(3);
// seasons.removeHead();
// seasons.addToHead(1);
// seasons.addToTail(4);
// seasons.addToTail(5);
// seasons.addToTail(6);
// seasons.addToTail(7);
// seasons.addToTail(8);
// seasons.addToTail(9);
// seasons.addToTail(10);

// seasons.printList();

module.exports = LinkedList;
