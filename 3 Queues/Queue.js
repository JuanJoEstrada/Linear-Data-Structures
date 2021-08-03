const LinkedList = require('./LinkedList')

class Queue {

  constructor(maxSize = Infinity) {
    this.queue = new LinkedList()
    this.size = 0
    this.maxSize = maxSize
  }

  hasRoom() {
    return this.size < this.maxSize
  }

  isEmpty() {
    return this.size === 0
  }

  enqueue(data) {
    if (this.hasRoom()) {
      this.queue.addToTail(data)
      // It should increase as nodes are added
      this.size ++
      console.log(`Added ${data} Queue size is ${this.size}`)
    } else {
      throw new Error('Queue is full, cannot enqueue.')
    }
  }

  dequeue() {
    if (!this.isEmpty()) {
      const data = this.queue.removeHead()
      this.size --
      console.log(`Removed ${data} from queue! Queue size is ${this.size}`)
      return data
    } else {
      throw new Error('Queue is empty, cannot dequeue.')
    }
  }
}

module.exports = Queue;

// const boundedQueue = new Queue(3);

// boundedQueue.enqueue(1);
// boundedQueue.enqueue(2);
// boundedQueue.enqueue(3);
// boundedQueue.enqueue(4);
// console.log(boundedQueue.hasRoom())

// boundedQueue.dequeue();
// boundedQueue.dequeue();
// console.log(boundedQueue.hasRoom())
// boundedQueue.dequeue();