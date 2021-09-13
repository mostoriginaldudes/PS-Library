class PriorityQueue {
  #heap;
  #compare;

  constructor(compare = (a, b) => b - a) {
    this.#heap = [null];
    this.#compare = compare;
  }

  push(payload) {
    this.#heap.push(payload);
    this.#heapifyUp();
  }

  print() {
    console.log(this.#heap);
  }

  pop() {
    const result = this.#heap[1];
    this.#heap[1] = null;
    this.#heapifyDown();
    return result;
  }

  top() {
    return this.#heap[1];
  }

  size() {
    return this.#heap.length - 1;
  }

  empty() {
    return this.size() === 0;
  }

  #swap(a, b) {
    const temp = this.#heap[a];
    this.#heap[a] = this.#heap[b];
    this.#heap[b] = temp;
  }

  #heapifyDown() {
    let nodeIndex = 1;
    const len = this.size();

    while (nodeIndex < len) {
      let leftChildIndex = nodeIndex * 2;
      let rightChildIndex = nodeIndex * 2 + 1;

      if (leftChildIndex > this.size() && rightChildIndex > this.size()) {
        break;
      }

      const leftChild = this.#heap[leftChildIndex];
      const rightChild = this.#heap[rightChildIndex];

      if (!leftChild) {
        this.#swap(nodeIndex, rightChildIndex);
        nodeIndex = rightChildIndex;
      } else if (!rightChild) {
        this.#swap(nodeIndex, leftChildIndex);
        nodeIndex = leftChildIndex;
      } else {
        const compareLeftToRight = this.#compare(leftChild, rightChild);
        if (compareLeftToRight < 0) {
          this.#swap(nodeIndex, leftChildIndex);
          nodeIndex = leftChildIndex;
        } else {
          this.#swap(nodeIndex, rightChildIndex);
          nodeIndex = rightChildIndex;
        }
      }
    }
    this.#tidyUp(nodeIndex);
  }

  #heapifyUp() {
    let nodeIndex = this.size();

    while (nodeIndex > 1) {
      const parentIndex = Math.floor(nodeIndex / 2);
      const parentNode = this.#heap[parentIndex];
      const currentNode = this.#heap[nodeIndex];

      const compareCurrentToParent = this.#compare(parentNode, currentNode);
      if (compareCurrentToParent >= 1) {
        this.#swap(parentIndex, nodeIndex);
      }
      nodeIndex = parentIndex;
    }
  }

  #tidyUp(nodeIndex) {
    this.#heap[nodeIndex] ?? this.#swap(nodeIndex, this.size());
    this.#heap.pop();
  }
}

const pq = new PriorityQueue((a, b) => b - a);

pq.push(5);
pq.print();
pq.push(3);
pq.print();
pq.push(4);
pq.print();
pq.push(2);
pq.print();
pq.push(1);
pq.print();

console.log('pop');
console.log(pq.pop());
pq.print();
console.log(pq.pop());
pq.print();
console.log(pq.pop());
pq.print();
console.log(pq.pop());
pq.print();
console.log(pq.pop());
pq.print();
pq.print();
