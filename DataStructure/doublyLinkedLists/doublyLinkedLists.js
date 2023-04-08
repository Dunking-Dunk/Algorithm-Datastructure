//Almost identical to singly Linked Lists except every node has another pointer, to the previous node
// it takes more memory than singlystacklist

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//     this.prev = null;
//   }
// }

// class DoublyLinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }

//   traverse() {
//     let current = this.head;
//     while (current) {
//       console.log(current.val);
//       current = current.next;
//     }
//   }

//   push(val) {
//     let newNode = new Node(val);
//     if (!this.head) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       this.tail.next = newNode;
//       newNode.prev = this.tail;
//       this.tail = newNode;
//     }
//     this.length++;
//     return this;
//   }

//   pop() {
//     if (this.length === 0) return undefined;
//     let current = this.tail;
//     if (this.length === 1) {
//       this.head = null;
//       this.tail = null;
//     } else {
//       this.tail = current.prev;
//       this.tail.next = null;
//       current.prev = null;
//     }
//     this.length--;
//     return current;
//   }

//   shift() {
//     if (this.length === 0) return undefined;
//     let current = this.head;
//     if (this.length === 1) {
//       this.head = null;
//       this.tail = null;
//     } else {
//       this.head = current.next;
//       this.head.prev = null;
//       current.next = null;
//     }
//     this.length--;
//     return current;
//   }

//   unshift(val) {
//     let newNode = new Node(val);
//     if (!this.head) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       this.head.prev = newNode;
//       newNode.next = this.head;
//       this.head = newNode;
//     }
//     this.length++;
//     return this;
//   }

//   get(idx) {
//     if (idx < 0 || idx >= this.length) return null;
//     let mid = Math.floor(this.length / 2);
//     if (idx < mid) {
//       let current = this.head;
//       for (let i = 0; i < idx; i++) {
//         current = current.next;
//       }
//       return current;
//     } else {
//       let current = this.tail;
//       for (let i = this.length - 1; i > idx; i--) {
//         current = current.prev;
//       }
//       return current;
//     }
//   }

//   set(val, idx) {
//     if (idx < 0 || idx >= this.length) return null;
//     let foundNode = this.get(idx);
//     if (foundNode !== null) {
//       foundNode.val = val;
//       return true;
//     }
//     return false;
//   }

//   insert(val, idx) {
//     if (idx < 0 || idx >= this.length) return null;
//     if (idx === 0) {
//       this.unshift(val);
//       return true;
//     }
//     if (idx === this.length) {
//       this.push(val);
//       return true;
//     }

//     let newNode = new Node(val);
//     let foundNode = this.get(idx);
//     let prevNode = foundNode.prev;

//     prevNode.next = newNode;
//     newNode.next = foundNode;
//     newNode.prev = prevNode;
//     foundNode.prev = newNode;
//     this.length++;
//     return true;
//   }

//   remove(idx) {
//     if (idx < 0 || idx >= this.length) return null;
//     if (idx === 0) {
//       this.shift();
//       return true;
//     }
//     if (idx === this.length - 1) {
//       this.pop();
//       return true;
//     }

//     let foundNode = this.get(idx);
//     let prevNode = foundNode.prev;

//     prevNode.next = foundNode.next;
//     foundNode.next.prev = prevNode;
//     foundNode.next = null;
//     foundNode.prev = null;
//     this.length--;
//     return true;
//   }

//   reverse() {
//     if (this.length <= 1) return null;
//     let count = this.length;
//     let current = this.tail;
//     while (count !== 0) {
//       console.log(current.val);
//       current = current.prev;
//       count--;
//     }
//   }
// }

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {}
}

const list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);
list.reverse();
