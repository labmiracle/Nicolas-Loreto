export interface INode {
  data: number | null;
  left: INode | null;
  right: INode | null;
}

export class Node implements INode {
  constructor(
    data: number | null,
    left: INode | null = null,
    right: INode | null = null
  ) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
  data: number | null;
  left: INode | null;
  right: INode | null;
}

export class Tree {
  root: INode | null;
  size: number;
  constructor() {
    this.root = null;
    this.size = 0;
  }

  // method for add a new value
  add(value: number) {
    const node = new Node(value);

    if (!this.root) {
      this.root = node;
    } else {
      this.addNode(this.root, node);
    }

    this.size++;
    console.log(`'${value}' has been added`);
  }

  // add in order
  addNode(node: INode, newNode: INode) {
    // if the new node is less than the current node the new node is added to the left
    if (newNode.data! < node.data!) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this.addNode(node.left, newNode);
      }
    }

    // if the new node is greater than the current node the new node is added to the right
    if (newNode.data! > node.data!) {
      if (!node.right) {
        node.right = newNode;
      } else {
        this.addNode(node.right, newNode);
      }
    }
  }

  // method for count nodes
  sizeCurrent() {
    return this.size;
  }

  maxValue() {
    if (!this.root) {
      return 'empty tree'; // the tree is empty
    }

    let max: number | null = this.root.data!; // max value
    const newSet: Set<number> = new Set(); // created new Set

    while (this.root) {
      // add to set the root node on the right, because here are the max values
      newSet.add(this.root.data!);
      this.root = this.root.right;
    }

    const arr: number[] = [...newSet]; // converted set to array

    for (let i = 0; i < arr.length; i++) {
      while (max < arr[i]) {
        // while max value is minor than array element, max value is array element
        max = arr[i];
      }
    }
    return max; // return the max value
  }
}

const n = new Tree();
n.add(60);
n.add(80);
n.add(20);
n.add(30);
n.add(10);
n.add(50);
n.add(90);
console.log(n.sizeCurrent());
console.log(n);
n.maxValue();
