//should be lower than parent node

//For any index of an array n
//from parents to child
    // the left child is stored at 2n+1
    // the right child is stored at 2n + 2
//from child to parents
    // (n-1)/2 and floor the num
// Removing from a heap
    // remove the root
    // replace with the most recently added
    // adjust  
    //bubble-down


class MaxBinaryHeap {
    constructor() {
        this.values = []
    }

    swap(arr, idx1, idx2) {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    }

    bubbleUp() {
        let idx = this.values.length - 1
        const element = this.values[idx]
        while (idx >= 0) {
            let parentIdx = Math.floor((idx - 1) / 2)
            if (element > this.values[parentIdx]) {
                this.swap(this.values, idx, parentIdx)
                idx = parentIdx
            }
            else break
        }
    }

    insert(val) {
        this.values.push(val)
        this.bubbleUp()
    }

    extractMax() {
        this.swap(this.values, this.values.length - 1, 0)
        let top = this.values.pop()
        this.sinkDown()
        return top
    }

    sinkDown() {
        let parentIdx = 0
 
        while (true) {
            
            let left = (parentIdx * 2) + 1
            let right = (parentIdx * 2) + 2

            if (this.values[left] > this.values[parentIdx] && this.values[right]> this.values[parentIdx]) {
                if (this.values[left] > this.values[right]) {
                    this.swap(this.values, left, parentIdx)
                    parentIdx = left
                } 
                this.swap(this.values, right, parentIdx)
                parentIdx = right
            }

            if (this.values[left]  > this.values[parentIdx]) {
                this.swap(this.values, left, parentIdx)
                parentIdx = left
            }

            if (this.values[right] > this.values[parentIdx]) {
                this.swap(this.values, right, parentIdx)
                parentIdx = right
            }
            left = (parentIdx * 2) + 1
            right = (parentIdx * 2) + 2

            if (this.values[right] === undefined || this.values[right] < this.values[parentIdx] && this.values[left] === undefined || this.values[left] < this.values[parentIdx]) break
        }
        return
    }

}

let tree = new MaxBinaryHeap()
tree.insert(60)
tree.insert(50)
tree.insert(49)
tree.insert(42)
tree.insert(45)
tree.insert(25)
tree.insert(41)
tree.insert(55)
tree.insert(87)
tree.insert(20)
console.log(tree.extractMax())

console.log(tree.values)