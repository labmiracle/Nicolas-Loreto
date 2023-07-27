export interface INodo {
  data: string;
  next: INodo | null;
}

// class Node with data and next reference
export class Nodo implements INodo {
  data: string;
  next: Nodo | null;
  constructor(data: string, next: INodo | null = null) {
    this.data = data;
    this.next = next;
  }
}

// class LinkedList
export class LinkedList {
  head: INodo | null;
  size: number;
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // size method
  sizeCurrent() {
    console.log(`the current size of the LinkedList is ${this.size}`);
    return this.size;
  }

  // add method
  add(value: any) {
    const nodo: INodo = new Nodo(value); // create "nodo" object

    // if this.head is null, node becomes this.head
    // if this.head is not null, current becomes this.head
    if (!this.head) {
      this.head = nodo;
    } else {
      let current: INodo = this.head;

      // searching for the null value using while
      while (current.next) {
        current = current.next;
      }
      current.next = nodo; // add value
    }

    this.size++; // increment size
    console.log(`'${value}' has been added`);
  }

  // clear method
  clearList() {
    this.head = null;
    this.size = 0;
  }

  // remove method
  remove(value: string) {
    let current: INodo | null = this.head; // start by this.head

    if (!current) return; // if LinkedList is empty return

    let previous: INodo | null = null;

    // advance for the list
    while (current && current.data != value) {
      previous = current;
      current = current.next;
    }

    // value not found
    if (!current) {
      console.log(`'${value}' is not found for remove`);
      return;
    }

    // if previous is null then the first element is the value and this element is deleted
    // else the current is deleted
    if (!previous) {
      this.head = current.next;
    } else {
      previous.next = current.next;
    }
    this.size--;
    console.log(`'${value}' has been removed`);
  }

  // find method

  find(value: string) {
    let current;
    current = this.head;

    while (current && current.data != value) {
      current = current.next;
    }

    if (!current) {
      console.log(`'${value}' is not found`);
    } else {
      console.log(`'${value}' found`);
    }
  }

  // invert method

  invert() {
    let current: INodo | null = this.head;
    let previous: INodo | null = null;
    let next: INodo | null = null;

    while (current) {
      next = current.next; // save next value of current value
      current.next = previous; // reference inverted to previous
      previous = current; // previous is current value
      current = next; // current value is the next
    }

    this.head = previous; // previous value is now the head
  }

  // deleteDups method

  deleteDups() {
    const uniqueValues: Set<string> = new Set(); // new set for unique values

    let current: INodo | null = this.head;
    let previous: INodo | null = null;

    if (!this.head) {
      console.log('empty list');
      return;
    }

    while (current) {
      if (uniqueValues.has(current.data)) {
        // if current data exists in the set
        previous!.next = current.next; // change the reference to the following of the repeated
        this.size--; // size decrement
      } else {
        uniqueValues.add(current.data); // if not exist add current.data to Set
        previous = current; // reference to the previous value
      }
      current = current.next; // cuurent is the current next
    }
  }
}

let list = new LinkedList();

list.add('1');
list.add('3');
list.add('1');
list.add('4');

list.deleteDups();
console.log(list);
