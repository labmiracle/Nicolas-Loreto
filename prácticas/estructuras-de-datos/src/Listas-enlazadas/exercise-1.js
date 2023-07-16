// class Node with data and next reference
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

// class LinkedList
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // size method
  sizeCurrent() {
    console.log(`the current size of the LinkedList is ${this.size}`);
  }
  add(value) {
    let node = new Node(value); // create "node" object

    let current; // create current node

    // if this.head is null, node becomes this.head
    // if this.head is not null, current becomes this.head
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;

      // searching for the null value using while
      while (current.next) {
        current = current.next;
      }

      current.next = node; // add value
    }

    this.size++; // increment size
    console.log(`'${value}' has been added`);
  }

  clearList() {
    this.head = null;
    this.size = 0;
  }

  remove(value) {
    let current = this.head; // start by this.head

    if (!current) return; // if LinkedList is empty return

    let previus;

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

  find(value) {
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
    let current = this.head;
    let previous;
    let next;

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
