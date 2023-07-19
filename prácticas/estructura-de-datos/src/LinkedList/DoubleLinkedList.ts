import { LinkedList } from './LinkedList';
import { Nodo, NodoI } from './LinkedList';

interface NodoDoubleRefI extends NodoI {
  prev: string | null;
}

class NodoDoubleRef extends Nodo {
  public prev: NodoDoubleRefI | null = null;
  constructor(data: string) {
    super(data);
  }
}

class DoubleLinkedList extends LinkedList {
  add(value: string) {
    let nodo = new NodoDoubleRef(value) as any;

    if (!this.head) {
      this.head = nodo;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
        nodo.prev = current;
      }

      current.next = nodo;
      nodo.prev = current;
    }

    this.size++;
  }
}

let list = new DoubleLinkedList();

list.add('hola');
console.log(list);
