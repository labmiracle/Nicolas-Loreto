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
    console.log('The current size is', this.size);
    return this.size;
  }

  maxValue() {
    let current = this.root;
    if (!current) {
      return 'empty tree'; // the tree is empty
    }

    let max: number | null = current.data!; // max value
    const newSet: Set<number> = new Set(); // created new Set

    while (current) {
      // add to set the root node on the right, because here are the max values
      newSet.add(current.data!);
      current = current.right;
    }

    const arr: number[] = [...newSet]; // converted set to array

    for (let i = 0; i < arr.length; i++) {
      while (max < arr[i]) {
        // while max value is minor than element of array, max value is this element
        max = arr[i];
      }
    }
    console.log('The maximum value in the tree is', max);
    return max; // return the max value
  }

  minValue() {
    let current = this.root;
    if (!current) {
      return 'empty tree'; // the tree is empty
    }

    let min: number | null = current.data!; // min value
    const newSet: Set<number> = new Set(); // created new Set

    while (current) {
      // add to set the root node on the left, because here are the min values
      newSet.add(current.data!);
      current = current.left;
    }

    const arr: number[] = [...newSet]; // converted set to array

    for (let i = 0; i < arr.length; i++) {
      while (min > arr[i]) {
        // while min value is greater than element of array, min value is this element
        min = arr[i];
      }
    }
    console.log('The minimum value in the tree is', min);
    return min; // return the min value
  }

  order(node: INode | null) {
    if (node != null) {
      this.order(node.left); // start to left
      console.log(node.data); // take a value
      this.order(node.right); // continue to the right
    }
  }

  previousOrder(node: INode | null) {
    if (node != null) {
      console.log(node.data); // take the value
      this.previousOrder(node.left); // continue to the left
      this.previousOrder(node.right); // continue to the right
    }
  }

  postOrder(node: INode | null) {
    if (node != null) {
      this.postOrder(node.left); // start to left
      this.postOrder(node.right); // continue to the right
      console.log(node.data); // take the value
    }
  }
}

// new tree
const n = new Tree();

// add values
n.add(60);
n.add(80);
n.add(20);
n.add(30);
n.add(10);
n.add(50);
n.add(90);

// current size
n.sizeCurrent();

// take the max value
n.maxValue();

// take the min value
n.minValue();

// tree traversal in order
n.order(n.root);

// tree transversal in previous order
n.previousOrder(n.root);

// tree transversal in post order
n.postOrder(n.root);
