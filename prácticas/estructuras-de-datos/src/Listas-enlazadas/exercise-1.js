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
    // create "node" object
    let node = new Node(value);
    // create current node
    let current;
    // if this.head is null, node becomes this.head
    if (!this.head) {
      this.head = node;
    } else {
      // if this.head is not null, current becomes this.head
      current = this.head;
      // searching for the null value using while
      while (current.next) {
        current = current.next;
      }
      // add value
      current.next = node;
    }
    // increment size
    this.size++;
    console.log(`'${value}' has been added`);
  }

  clearList() {
    this.head = null;
    this.size = 0;
  }

  remove(value) {
    // start by this.head
    let current = this.head;

    // if LinkedList is empty return
    if (!current) return;

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
}

let lista = new LinkedList();

lista.sizeCurrent();
lista.add('hello world');
lista.find('hello world');
lista.add('this is a new node');
lista.sizeCurrent();
lista.remove('hello');
lista.add('and another one');
lista.sizeCurrent();
lista.find('and another one');
lista.find('hello world');
lista.remove('hello world');
lista.sizeCurrent();
lista.remove('this is a new node');
lista.sizeCurrent();

console.log(lista);
