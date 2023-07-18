interface Nodo {
  data: string;
  next: Nodo | null;
}

// class Node with data and next reference
class Nodo implements Nodo {
  data: string;
  next: Nodo | null;
  constructor(data: string, next: Nodo | null = null) {
    this.data = data;
    this.next = next;
  }
}

// class LinkedList
class LinkedList {
  head: Nodo | null;
  size: number;
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // size method
  sizeCurrent() {
    console.log(`the current size of the LinkedList is ${this.size}`);
  }

  // add method
  add(value: string) {
    const nodo: Nodo = new Nodo(value); // create "node" object

    let current; // create current node

    // if this.head is null, node becomes this.head
    // if this.head is not null, current becomes this.head
    if (!this.head) {
      this.head = nodo;
    } else {
      let current: Nodo = this.head;

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
    let current: Nodo | null = this.head; // start by this.head

    if (!current) return; // if LinkedList is empty return

    let previus: Nodo | null = null;

    // advance for the list
    while (current && current.data != value) {
      previus = current;
      current = current.next;
    }

    // value not found
    if (!current) {
      console.log(`'${value}' is not found for remove`);
      return;
    }

    // if previous is null then the first element is the value and this element is deleted
    // else the current is deleted
    if (!previus) {
      this.head = current.next;
    } else {
      previus.next = current.next;
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
    let current: Nodo | null = this.head;
    let previous: Nodo | null = null;
    let next: Nodo | null = null;

    while (current) {
      next = current.next; // save next value of current value
      current.next = previous; // reference inverted to previous
      previous = current; // previous is current value
      current = next; // current value is the next
    }

    this.head = previous; // previous value is now the head

    console.log(lista);
  }
}

let lista = new LinkedList();

lista.add('1');
lista.add('2');
lista.add('3');
lista.add('4');
console.log(lista);
lista.sizeCurrent();
lista.find('2');
lista.remove('3');
lista.sizeCurrent();
lista.invert();
