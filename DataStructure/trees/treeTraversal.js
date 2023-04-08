//BFS breath first search
//DFS depth first - search down to the end of the tree and then sibiling node
//  preOrder
//  postOrder
//  inOrder

class Qnode {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class Queqe {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    enqueqe(val) {
        let newNode = new Qnode(val)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.size++
        return newNode
    }

    dequeqe() {
        if (!this.head) return null
        let current = this.head
        this.head = current.next
        current.next = null
        this.size--
        if (this.size === 0) {
            this.tail = null
        }
        return current.val
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
            return newNode
        }
        let current = this.root
        while (true) {
            if (val > current.val) {
                if (current.right) current = current.right
                else {
                    current.right = newNode
                    return newNode
                }
            }
            else {
                if (val < current.val) {
                    if (current.left) current = current.left
                    else {
                        current.left = newNode
                        return newNode
                    }
                }
            }
        }
    }

    search(num) {
        if (!this.root) return null
        let current = this.root
        while (true) {
            if (current.val === num) return current
            if (num > current.val) {
                if (current.right) current = current.right
                else return null
                
            }
            else {
                if (num < current.val) {
                    if (current.left) current = current.left
                    else return null
                }
            }
        }
    }

    bfsTraverse() {
        let queqe = new Queqe()
        queqe.enqueqe(this.root)
        let visted = []
        while (queqe.size) {
            let queqed = queqe.dequeqe()
            visted.push(queqed.val)
            if (queqed.left) queqe.enqueqe(queqed.left) 
            if (queqed.right) queqe.enqueqe(queqed.right) 
        }
        return visted
    }

    dfsPreOrder() {
        let visited = []
        let current = this.root
        const helper = (current) => {
            visited.push(current.val)
            if (current.left) helper(current.left)
            if (current.right) helper(current.right)
        }
        helper(current)
        return visited
    }
    
    dfsPostOrder() {
        let visted = []
        let current = this.root
        const traverse = (root) => {
            if (root.left) traverse(root.left)
            if (root.right) traverse(root.right)
            visted.push(root.val)
        }
        traverse(current)
        return visted
    }

    dfsInOrder() {
        let visted = []
        let current = this.root
        const traverse = (root) => {
            if (root.left) traverse(root.left)
            visted.push(root.val)
            if (root.right) traverse(root.right)
        }
        traverse(current)
        return visted
    }

}

let tree = new BinarySearchTree()
tree.insert(12)
tree.insert(16)
tree.insert(20)
tree.insert(8)
tree.insert(4)
tree.insert(3)
tree.insert(6)
tree.insert(10)
console.log(tree.dfsPreOrder())
console.log(tree.dfsPostOrder())
console.log(tree.dfsInOrder())


//