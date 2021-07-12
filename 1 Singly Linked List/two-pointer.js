const LinkedList = require('./LinkedList');

const testList = new LinkedList();
for (let i = 1; i <= 50; i++) {
  testList.addToHead(i);
}

const findNthNode = (list, n) => {

  let current = null;
  let tailSeeker = list.head;
  let count = 0;

  while (tailSeeker) {
    tailSeeker = tailSeeker.next;
    if (count >= n) {
      if (!current) {
        current = list.head;
        current = current.next;
      }
    }
    count ++;
  }
  
  return current;

};

console.log(findNthNode(testList, 64));

const findMiddle = linkedList => {

  let fastPointer = linkedList.head;
  let slowPointer = linkedList.head;
  while (fastPointer !== null) {
    fastPointer = fastPointer.getNextNode();
    if (fastPointer !== null) {
      fastPointer = fastPointer.getNextNode();
      slowPointer = slowPointer.getNextNode();
    }
  }
  return slowPointer;
};

console.log(findMiddle(testList));