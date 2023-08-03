export class Stack {
  constructor(public arr: any[] = []) {}

  push(value: any) {
    this.arr.push(value);
  }

  pop() {
    if (this.arr.length === 0) return 'empty stack';
    this.arr.pop();
  }

  size() {
    return this.arr.length;
  }

  showStack() {
    return this.arr;
  }
}

const newStack = new Stack();

newStack.push('hello');
newStack.push('Mike');
newStack.size();
newStack.showStack();
