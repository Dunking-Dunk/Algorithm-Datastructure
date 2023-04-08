//Every parent node has at most two children
// every node to the left of a parent node is always less than the parent
// every node to the right of a parent node is always greater than the parent
//time O(log n)
//space O(n)

//insertion O(log n)
//Searching O(log n)

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
            if (newNode.val > current.val) {
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
    
    search(num) {
        if (!this.root) return null
        let current = this.root
        while (true) {
            if (num === current.val) return current
            if (num > current.val) {
                if (current.right) current = current.right
                else return null
            } else {
                if (current.left) current = current.left
                else return null
            }
        }
    }
}

const tree = new BinarySearchTree()
tree.insert(12)
tree.insert(8)
tree.insert(16)
tree.insert(4)
tree.insert(20)
tree.insert(2)
tree.insert(22)
tree.insert(24)
tree.insert(1)
tree.insert(30)
tree.insert(28)
tree.insert(29)

console.log(tree)

