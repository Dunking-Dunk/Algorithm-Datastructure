class MaxBinaryHeap {
    constructor() {
        this.list = []
    }

    swap(arr, idx1, idx2) {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    }

    bubbleUp() {
        let node = this.list.length - 1
        while (node >= 0) {
            let parent = Math.floor((node-1)/2)
            if (this.list[node] > this.list[parent]) {
                this.swap(this.list, node, parent)
                node = parent
            } else break
        }
    }

    insert(val) {
        if (!this.list) this.list.push(val)
        this.list.push(val)
        this.bubbleUp()
    }

    sinkDown() {
        let current = 0
        let currentNode = this.list[current]

        while (true) {
            let left = (current * 2) + 1
            let right = (current * 2) + 2
            let swap = null
        
            if (left < this.list.length) {
                let leftNode = this.list[left]
                if (leftNode > currentNode) {
                    this.swap(this.list, current, left)
                    current = left
                    swap = true
                }
            }
            if (right > this.list.length) {
                    let rightNode = this.list[right]
                    if (rightNode > currentNode && swap === false || right > left && swap === true) {
                        this.swap(this.list, current, right)
                        current = right
                        swap = true
                    }
            }
            if(swap === null) break
            swap = null
            }
        }

    extractMax() {
        let top = this.list.shift()
        this.list.unshift(this.list.pop())
        this.sinkDown()
        return top
    }

}

let tree = new MaxBinaryHeap()
tree.insert(50)
tree.insert(53)
tree.insert(35)
tree.insert(73)
 
tree.insert(30)
tree.insert(25)
console.log(tree.extractMax())
console.log(tree)