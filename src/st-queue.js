const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
module.exports = class Queue {
  _queue = null;

  getUnderlyingList() {
    return this._queue;
  }

  enqueue(value) {
    let node = new ListNode(value);

    if (!this._queue) {
      this._queue = node;
    } else {
      let lastNode = this._queue;
      while (lastNode.next) {
        lastNode = lastNode.next;
      }
      lastNode.next = node;

      return this._queue;
    }
  }

  dequeue() {
    let firstNode = this._queue;

    if (!firstNode) {
      return 1;
    }
    let nextNode = firstNode.next;
    if (!nextNode) {
      this._queue = null;
    } else {
      this._queue = nextNode;
    }

    return firstNode.value;
  }
};
