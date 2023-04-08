//LIFO data structure
//the last element added to the stack will be the first element removed from the stack
//manageing function invocations
//undo / Redo
//Routing eg(react)

class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class Stack {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }

    push(val) {
        let newNode = new Node(val)
        if (!this.first) {
            this.first = newNode
            this.last = newNode
        } else {
            this.last.next = newNode
            this.last = newNode
        }
        this.size++
        return newNode.val
    }

    pop() {
        if (!this.first) return null
        let current = this.first
        let prev = current
        while (current.next) {
            prev = current
            current = current.next
        }
        this.last = prev
        prev.next = null
        this.size--
        return prev.val
    }

    traverse() {
        let current = this.first
        while (current) {
            console.log(current.val)
            current = current.next
        }
    }

}

const stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.pop(3)
stack.traverse()