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

    while (nodeIndex < this.size()) {
      let leftChildIndex = nodeIndex * 2;
      let rightChildIndex = nodeIndex * 2 + 1;

      if (isLastNode.call(this, leftChildIndex, rightChildIndex)) {
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
        if (this.#shouldSwap(leftChild, rightChild)) {
          this.#swap(nodeIndex, rightChildIndex);
          nodeIndex = rightChildIndex;
        } else {
          this.#swap(nodeIndex, leftChildIndex);
          nodeIndex = leftChildIndex;
        }
      }
    }
    tidyUp.call(this);

    function isLastNode(leftNodeIndex, rightNodeIndex) {
      return leftNodeIndex > this.size() && rightNodeIndex > this.size();
    }

    function tidyUp() {
      this.#heap[nodeIndex] ?? this.#swap(nodeIndex, this.size());
      this.#heap.pop();
    }
  }

  #heapifyUp() {
    let nodeIndex = this.size();

    while (nodeIndex > 1) {
      const parentIndex = Math.floor(nodeIndex / 2);
      const parentNode = this.#heap[parentIndex];
      const currentNode = this.#heap[nodeIndex];

      this.#shouldSwap(parentNode, currentNode) && this.#swap(parentIndex, nodeIndex);
      nodeIndex = parentIndex;
    }
  }

  #shouldSwap(a, b) {
    return this.#compare(a, b) >= 1;
  }
}

const pq = new PriorityQueue((a, b) => a - b);

pq.push(5);
pq.print();
pq.push(4);
pq.print();
pq.push(3);
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
