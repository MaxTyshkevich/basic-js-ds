const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
module.exports = class BinarySearchTree {
  tree = null;

  root() {
    return this.tree;
  }

  add(data) {
    this.tree = inner(this.tree);

    function inner(node) {
      if (node === null) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (node.data > data) {
        node.left = inner(node.left);
      } else if (node.data < data) {
        node.right = inner(node.right);
      }

      return node;
    }
  }

  has(data) {
    return inner(this.tree);

    function inner(node) {
      if (node === null) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      if (node.data > data) {
        return inner(node.left);
      } else if (node.data < data) {
        return inner(node.right);
      }
    }
  }

  find(data) {
    return inner(this.tree);

    function inner(node) {
      if (node === null) {
        return null;
      }

      if (node.data === data) {
        return node;
      }

      if (node.data > data) {
        return inner(node.left);
      } else if (node.data < data) {
        return inner(node.right);
      }
    }
  }

  remove(data) {
    this.tree = inner(this.tree, data);

    function inner(node, value) {
      if (node === null) {
        return null;
      }

      if (value < node.data) {
        node.left = inner(node.left, value);
        return node;
      } else if (value > node.data) {
        node.right = inner(node.right, value);
        return node;
      } else {
        //НАШЛИ УДАЛЯЕМОЕ ЗНАЧЕНИЕ
        if (!node.left && !node.right) {
          // лист
          node = null;
          return node;
        } else if (!node.left) {
          node = node.right;
          return node;
        } else if (!node.right) {
          node = node.left;
          return node;
        }

        let minRight = node.right;

        while (minRight.left) {
          minRight = minRight.left;
        }

        node.data = minRight.data;
        node.right = inner(node.right, minRight.data);
        return node;
      }
    }
  }

  min() {
    if (!this.tree) return null;

    let currentNode = this.tree;
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode.data;
  }

  max() {
    if (!this.tree) return null;

    let currentNode = this.tree;
    while (currentNode.right) {
      currentNode = currentNode.right;
    }
    return currentNode.data;
  }
};
