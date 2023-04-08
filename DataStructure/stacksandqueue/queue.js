//FIFO

class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class Queqe {
    constructor() {
        this.start = null
        this.end = null
        this.size = 0
    }

    enqueqe(val) {
        let newNode = new Node(val)
        if (!this.start) {
            this.start = newNode
            this.end = newNode
        } else {
            this.end.next = newNode
            this.end = newNode
        }
        this.size++
        return newNode.val
    }

    dequeqe() {
        if (!this.start) return null
        let current = this.start
        this.start = current.next
        current.next = null
        this.size--
        if (this.size === 0) this.end = null
        return current
    }

}

const queqe = new Queqe()
queqe.enqueqe(1)
queqe.enqueqe(3)
queqe.enqueqe(2)
queqe.dequeqe()
console.log(queqe)

let a = 0 
while (a < 4) {
    console.log(a)
    a++
}