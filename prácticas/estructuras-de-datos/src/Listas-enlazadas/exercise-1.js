// class Node with data and reference
class Node {
  constructor(data, ref = null) {
    this.data = data;
    this.ref = ref;
  }
}

// class LinkedList with head, size and insert method
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  insert(data) {
    // create "node" object
    let node = new Node(data);
    // create current node
    let current;
    // if this.head is null, node becomes this.head
    if (!this.head) {
      this.head = node;
    } else {
      // if this.head is not null, current becomes this.head
      current = this.head;
      // searching for the null value using while
      while (current.ref) {
        current = current.ref;
      }
      // insert value
      current.ref = node;
    }
    // increment size
    this.size++;
  }
}

let lista = new LinkedList();

lista.insert('hello world');
lista.insert('Head 2');
console.log(lista);
