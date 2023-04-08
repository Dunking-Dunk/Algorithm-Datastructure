//A dataStructure that contains a head , tail and length property
//Linked lists consist of nodes and each node has a value and a pointer  to another node or null
// Collections of nodes

//piece of data - val
//reference to next node - next

// class Node {
//     constructor(val) {
//         this.val = val
//         this.next = null
//     }
// }

// class SinglyLinkedList {

//     constructor() {
//         this.head = null
//         this.tail = null
//         this.length = 0
//     }

//     push(val) {
//         const node = new Node(val)
//         if (!this.head) {
//             this.head = node
//             this.tail = this.head
//         } else {
//             this.tail.next = node
//             this.tail = node
//         }
//         this.length++
//         return this
//     }
//     traverse() {
//         let current = this.head
//         while (current) {
//             console.log(current.val)
//             current = current.next
//         }
//     }

//     pop() {
//         if (!this.head) return undefined
//         let current = this.head
//         let newTail = current
//         while (current.next) {
//             newTail = current
//             current = current.next
//         }
//         this.tail = newTail
//         this.tail.next = null
//         this.length--
//         if (this.length === 0) {
//             this.head = null
//             this.tail = null
//         }
//         return current
//     }

//     shift() {
//         if (!this.head) return undefined
//         let current = this.head
//         this.head = current.next
//         this.length--
//         if (this.length === 0) {
//             this.tail = null
//         }
//         return current
//     }

//     unshift(val) {
//         let node = new Node(val)
//         if (!this.head) {
//             this.head = node
//             this.tail = this.head
//         } else {
//             node.next = this.head
//             this.head = node
//         }
//         this.length++
//         return this
//     }

//     get(idx) {
//         if (idx >= this.length || idx < 0) return null
//         let current = this.head
//         for (let i = 0; i < idx; i++) {
//             current = current.next
//         }
//         return current
//     }

//     set(val, idx) {
//         const foundNode = this.get(idx)
//         if (foundNode) {
//             foundNode.val = val
//             return true
//         }
//         return false
//     }

//     insert(idx, val = null) {
//         if(idx < 0 || idx >= this.length) return undefined
//         if (val === null) return false
//         let foundNode = this.get(idx)
//         let previousNode = this.get(idx - 1)
//         let node = new Node(val)
//         if (foundNode && previousNode) {
//             node.next = foundNode
//             foundNode = node
//             previousNode.next = foundNode
//             this.length++
//             return true
//         }
//         if (idx === 0 & !previousNode) {
//             this.unshift(val)
//             return true
//         }
//         if (idx === this.length) {
//             this.push(val)
//             return true
//         }
//     }

//     remove(idx) {
//         if (idx < 0 || idx >= this.length) return undefined
//         if (idx === 0) return this.shift(idx)
//         if (idx === this.length - 1) return this.pop(idx)
//         let previousNode = this.get(idx - 1)
//         if (previousNode && idx !== this.length - 1) {
//             let removed = previousNode.next
//             let nextFoundNode = removed.next
//             previousNode.next = nextFoundNode
//             this.length--
//             return removed
//         }
//     }

//     reverse() {
//         let node = this.head
//         this.head = this.tail
//         this.tail = node
//         let next;
//         let prev = null
//         for (let i = 0; i < this.length; i++) {
//             next = node.next
//             node.next = prev
//             prev = node
//             node = next
//         }
//         return this
//     }
// }

// const list1 = new SinglyLinkedList()
// list1.push(1)
// list1.push(2)
// list1.push(3)
// list1.push(4)
// list1.push(5)
// list1.reverse()
// console.log(list1.traverse())

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length++;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  traverse() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    return arr;
  }

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let prevNode;
    while (current.next) {
      prevNode = current;
      current = current.next;
    }
    this.tail = prevNode;
    this.tail.next = undefined;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) return undefined;
    let current = this.head;
    let nextNode = current.next;
    this.head = nextNode;
    current.next = null;
    this.length--;
    return current;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      let nextNode = this.head;
      this.head = newNode;
      this.head.next = nextNode;
    }
    this.length++;
    return this;
  }

  get(idx) {
    if (idx < 0 && idx >= this.length) return undefined;
    let current = this.head;
    for (let i = 0; i < idx; i++) {
      current = current.next;
    }
    return current;
  }

  set(idx, val) {
    const foundNode = this.get(idx);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(idx, val = null) {
    if (idx < 0 && idx >= this.length) return undefined;
    if (val === null) return false;
    let newNode = new Node(val);
    let foundNode = this.get(idx);
    let prevNode = this.get(idx - 1);
    if (foundNode && prevNode) {
      newNode.next = foundNode;
      foundNode = newNode;
      prevNode.next = newNode;
      this.length++;
      return true;
    }
    if ((idx === 0) & !previousNode) {
      this.unshift(val);
      return true;
    }
    if (idx === this.length) {
      this.push(val);
      return true;
    }
  }

  remove(idx) {
    if (idx < 0 && idx >= this.length) return undefined;
    if (idx === 0) this.shift();
    if (idx === this.length - 1) this.pop();
    let foundNode = this.get(idx);
    let prevNode = this.get(idx - 1);
    let nextNode = this.get(idx + 1);
    if (foundNode && prevNode) {
      prevNode.next = nextNode;
      foundNode = null;
      this.length--;
      return true;
    }
    return false;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

const list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(4);
list.pop();
list.shift();
list.unshift(30);
list.get(0);
list.set(4, 10);
list.insert(2, 5);
console.log(list.traverse());
