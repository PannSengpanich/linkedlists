import Node from "./listNode.js";
function LinkedList() {
  let header = Node();
  let s = 0;
  function append(newNode) {
    let current = header;
    while (current.nextNode != null) {
      current = current.nextNode;
    }
    current.nextNode = newNode;
    s++;
  }
  function prepend(newNode) {
    header.nextNode = newNode;
    s++;
  }
  function size() {
    return s;
  }
  function head() {
    return header.nextNode;
  }
  function tail() {
    let current = header;
    while (current.nextNode != null) {
      current = current.nextNode;
    }
    return current;
  }
  function at(index) {
    let current = header;
    for (let i = 0; i < index + 1; i++) {
      current = current.nextNode;
    }
    return current;
  }
  function pop() {
    let current = header;
    while (current.nextNode.nextNode != null) {
      current = current.nextNode;
    }
    current.nextNode = null;
    s--;
  }
  function contains(value) {
    let current = header;
    while (current.nextNode != null) {
      current = current.nextNode;
      if (current.data == value) return true;
    }
    return false;
  }
  function find(value) {
    let current = header;
    let index = -1;
    while (current.nextNode != null) {
      current = current.nextNode;
      index++;
      if (current.data == value) {
        return index;
      }
    }
    return null;
  }
  function toString() {
    let result = "";
    let current = header;
    while (current.nextNode != null) {
      current = current.nextNode;
      result += `(${current.data}) -> `;
    }
    result += `null`;
    return result;
  }
  function insertAt(value, index) {
    let newNode = Node(value);
    let current = header;
    for (let i = 0; i < index; i++) {
      current = current.nextNode;
    }
    newNode.nextNode = current.nextNode;
    current.nextNode = newNode;
  }
  function removeAt(index) {
    let current = header;
    for (let i = 0; i < index; i++) {
      current = current.nextNode;
    }
    current.nextNode = current.nextNode.nextNode;
  }
  return {
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
  };
}
let ll = LinkedList();
let a = Node(1);
let b = Node(2);
let c = Node(3);
let d = Node(4);
ll.append(a);
ll.append(b);
ll.append(c);
ll.append(d);
console.log(ll.toString());
ll.insertAt(2.5, 2);
console.log(ll.toString());
ll.removeAt(2);
console.log(ll.toString());
console.log(ll.at(2));
