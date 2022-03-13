class Node {
  constructor(key, value, next, prev) {
    this.key = key === undefined ? 0 : key;
    this.value = value === undefined ? 0 : value;
    this.next = next === undefined ? null : next;
    this.prev = prev === undefined ? null : prev;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(node) {
    if (this.size === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  remove(node) {
    if (node === this.head) {
      this.head.prev = null;
      this.head = this.head.next;
      node.next = null;
    } else if (node === this.tail) {
      this.tail = this.tail.prev;
      node.prev = null;
    } else if (node !== this.head && node !== this.tail) {
      node.prev.next = node.next;
      node.next.prev = node.prev;
      node.next = null;
      node.prev = null;
    }
    this.size--;
  }

  size() {
    return this.size;
  }

  removeTailNode() {
    const value = this.tail.key;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      const temp = this.tail.prev;
      this.tail.prev = null;
      this.tail = temp;
      this.tail.next = null;
    }
    this.size--;
    return value;
  }
}
