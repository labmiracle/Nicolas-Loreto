export class Stack {
  constructor(public arr: any[] = []) {}

  push(value: any) {
    this.arr.push(value);
  }

  pop() {
    this.arr.pop();
  }

  size() {
    return this.arr.length;
  }

  showStack() {
    console.log(this.arr);
  }
}

let newStack = new Stack();

newStack.push('hello');
newStack.size();
newStack.showStack();
