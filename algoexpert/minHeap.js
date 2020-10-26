class MinHeap {
  constructor(array) {
    this.heap = this.buildHeap(array);
  }

  buildHeap(array) {
    let firstParentIndex = Math.floor((array.length - 1) / 2);

    for (let currIdx = firstParentIndex; currIdx >= 0; currIdx--) {
      if (array[currIdx] < array[firstParentIndex]) {
        this.siftDown(currIdx, array.length - 1, array);
      }
    }
    return array;
  }

  siftDown(currentIndex, endIndex, heap) {
    let childOneIdx = currentIndex * 2 + 1;

    while (childOneIdx <= endIndex) {
      let childTwoIdx =
        currentIndex * 2 + 2 <= endIndex ? currentIndex * 2 + 2 : -1;
      let idxToSwap;

      if (childTwoIdx !== -1 && heap[childTwoIdx] < heap[childOneIdx]) {
        idxToSwap = childTwoIdx;
      } else {
        idxToSwap = childOneIdx;
      }

      if (heap[currentIndex] > heap[idxToSwap]) {
        this.swap(currentIndex, idxToSwap, heap);
        currentIndex = idxToSwap;
        childOneIdx = currentIndex * 2 + 1;
      } else {
        return;
      }
    }
  }

  siftUp(currentIndex, heap) {
    let parentIndex = Math.floor((currentIndex - 1) / 2);

    while (currentIndex > 0 && heap[currentIndex] < heap[parentIndex]) {
      this.swap(currentIndex, parentIndex, heap);
      currentIndex = parentIndex;
      parentIndex = Math.floor((currentIndex - 1) / 2);
    }
  }

  remove() {
    this.swap(0, this.heap.length - 1, this.heap);
    let valueToRemove = this.heap.pop();
    this.siftDown(0, this.heap.length - 1, this.heap);
    return valueToRemove;
  }

  insert(value) {
    this.heap.push(value);
    this.siftUp(this.heap.length - 1, this.heap);
  }

  peek() {
    return this.heap[0];
  }

  swap(i, j, heap) {
    let temp = heap[i];
    heap[i] = heap[j];
    heap[j] = heap[i];
  }
}
