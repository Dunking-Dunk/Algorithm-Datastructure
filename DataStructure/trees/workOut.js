//lesser than parent node - left
//greater than parent node - right

class QueueNode {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class Queue {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    enqueue(val) {
        let newNode = new QueueNode(val)
        if (!this.head) {
            this.head = newNode
            this.tail = this.head
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.size++
        return newNode
    }

    dequeue() {
        if (!this.head) return null
        let current = this.head
        this.head = current.next
        current.next = null
        this.size--
        return current
    }

}

class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(val) {
        let newNode = new Node(val)
        if (!this.root) {
            this.root = newNode
            return this
        }
        let current = this.root
        while (true) {
            if (val > current.val) {
                if (current.right) current = current.right
                else {
                    current.right = newNode
                    return this
                }
            }
            else {
                if (current.left) current = current.left
                else {
                    current.left = newNode
                    return this
                }
            }
        }
    }

    search(val) {
        if (!this.root) return undefined
        let current = this.root
        while (val !== current.val) {
            if (val > current.val) {
                if (current.right) current = current.right
                else break
            }
            else {
                if (current.left) current = current.left
                else break
            }
        }
        return current
    }

    breathFirstSearch() {
        let queue1 = new Queue()
        queue1.enqueue(this.root)
        let visited = []
        while (queue1.size) {
            let current = queue1.dequeue().val
            if (current.left) queue1.enqueue(current.left)
            if (current.right) queue1.enqueue(current.right)
            visited.push(current.val)
        }
        return visited
    }

}

let tree = new BinarySearchTree()
tree.insert(10)
tree.insert(8)
tree.insert(9)
tree.insert(7)
tree.insert(12)
tree.insert(11)
tree.insert(6)
tree.insert(15)
tree.insert(13)
tree.insert(21)
tree.insert(20)
tree.insert(18)
tree.insert(2)
console.log(tree.breathFirstSearch())

