import { LinkedList } from './LinkedList';
import { Nodo, INodo } from './LinkedList';

interface NodoDoubleRefI extends INodo {
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
    const nodo = new NodoDoubleRef(value) as any;

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

const list = new DoubleLinkedList();

list.add('Hi!');
console.log(list);
