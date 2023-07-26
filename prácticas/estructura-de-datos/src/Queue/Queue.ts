export class Queue {
  constructor() {}

  arr: string[] = []; // create empty array

  // method for add at the end
  enqueue(value: any) {
    this.arr.push(value);
  }

  // method for delete the first value on the queue
  dequeue() {
    if (this.arr.length === 0) return 'empty Queue';
    this.arr.shift();
  }

  // method for show and return the size of the queue
  size() {
    console.log(this.arr.length);
    return this.arr.length;
  }
}

let newQueue = new Queue();
newQueue.enqueue('hello');
newQueue.enqueue('your name');
newQueue.enqueue('value3');
newQueue.size();
console.log(newQueue);
newQueue.dequeue();
console.log(newQueue);
newQueue.size();
