const LinkedList = require('../3 Queues/LinkedList')

class Stack {

  constructor(maxSize = Infinity) {
    this.stack = new LinkedList()
    this.maxSize = maxSize
    this.size = 0
  }

  hasRoom() {
    return this.size < this.maxSize
  }

  isEmpty() {
    return this.size === 0
  }

  push(value) {
    if (this.hasRoom()) {
      this.stack.addToHead(value)
      this.size ++
    } else {
      throw new Error('Stak is full. Cannot push new value.')
    }
  }

  pop() {
    if (!this.isEmpty()) {
      const value = this.stack.removeHead()
      this.size --
      return value 
    } else {
      throw new Error('Stack is empty. Cannot pop new value.')
    }
  }

  peek() {
    if (!this.isEmpty()) {
      return this.stack.head.data
    } else {
      return null
    }
  }
}

module.exports = Stack

// TESTING

// const pizzaStack = new Stack(6)
// 2. Add pizzas as they are ready until we fill up the stack
// for (let i = 1; i <= 6; i ++) {
  // pizzaStack.push(`Pizza #${i}`)
// }
// 3. Try pushing another pizza to check for overflow
// try {
  // pizzaStack.push('Pizza #7')
// } catch(e) {
  // console.log(e)
// }

// 4. Peek at the pizza on the top of stack and log its value
// console.log(`The first pizza to deliver is ${pizzaStack.peek()}`)

// 5. Deliver all the pizzas from the top of the stack down
// for (let i = 1; i <= 6; i ++) {
//   pizzaStack.pop()
// }

// 6. Try popping another pizza to check for empty stack
// try {
  // pizzaStack.pop()  
// } catch(e) {
// console.log(e)
// }

// console.log(pizzaStack)
// console.log(pizzaStack.stack)
