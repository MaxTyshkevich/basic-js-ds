const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

module.exports = function removeKFromList(l, k) {
  let last = null;
  let current = l;

  while (current.next) {
    if (current.value === k && !last) {
      l = current.next;
      current = l;
      continue;
    }
    if (current.value === k && last) {
      current = current.next;
      last.next = current;
      current = current.next;
      continue;
    }

    last = current;
    current = current.next;
  }

  return l;
};
