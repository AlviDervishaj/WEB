export class Queue<T> {
  /** Front pointer */
  private front: number = 0;
  /** Rear pointer */
  private rear: number = 0;
  /** Queue var */
  private q: Array<T>;

  constructor(...elements: T[]) {
    this.front = 0;
    this.rear = 0;
    this.q = [];
    for (const element of elements) {
      this.enqueue(element as T);
    }
  }

  get queue(): T[] {
    return this.q;
  }

  incrementFront() {
    this.front++;
  }

  incrementRear() {
    this.rear++;
  }

  decrementRear() {
    this.rear--;
  }

  // Insert element at rear.
  enqueue() {
    const _insertedElement = (this.rear + 1) as T;
    // insert at rear
    this.queue[this.rear] = _insertedElement;
    // increment rear
    this.incrementRear();
    return _insertedElement;
  }

  dequeue(): T {
    // check if queue is empty
    if (this.front === this.rear) {
      // queue is empty no element can be removed
      return;
    }

    // First In First Out
    // shift elements from index 1 to *rear* by one place.
    const banishedElement: T = this.queue[0];
    for (let i = 0; i < this.rear - 1; i++) {
      // [1, 2, 3, 4, 5]
      // shift by 1 index
      this.queue[i] = this.queue[i + 1];
    }
    // set the last element as undefined
    this.queue[this.rear - 1] = undefined;
    this.decrementRear();
    return banishedElement;
  }

  display() {
    // queue is empty
    if (this.front == this.rear) return;
    // Traverse front to rear and print elements
    for (let i = this.front; i < this.rear; i++) {
      document.write(this.queue[i] + "  <-- ");
    }
    return;
  }

  getFront() {
    return this.queue[this.front];
  }

  toArray() {
    // remove undefined when returning as array.
    return this.queue.filter((item) => !!item);
  }
}
