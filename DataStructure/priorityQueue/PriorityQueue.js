class Node {
    constructor(val, priority) {
        this.val = val
        this.priority = priority
    }
}

class PriorityQueue {
    constructor() {
        this.values = []
    }

    swap(arr, idx1, idx2) {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    }

    enqueue(val, priority) {
        let newNode = new Node(val, priority)
        this.values.push(newNode)
        this.bubbleUp()
    }

    bubbleUp() {
        let idx = this.values.length - 1
        let element = this.values[idx].priority
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2)
            let parent = this.values[parentIdx].priority
            if (element >= parent) break
            this.swap(this.values, parentIdx, idx)
            idx = parentIdx
        }
    }

    dequeue() {
        this.swap(this.values, this.values.length - 1, 0)
        let top = this.values.pop()
        this.bubbleDown()
        return top
    }

    bubbleDown() {
        let parentidx = 0
        let parentElement = this.values[parentidx].priority
        while (true) {
            let leftidx = parentidx * 2 + 1
            let rightidx = parentidx * 2 + 2
            let right, left;
            let swap = null

            if (leftidx < this.values.length) {
                left = this.values[leftidx].priority
                if (left < parentElement) {
                    swap = leftidx
                }
            }
            if (rightidx < this.values.length) {
                right = this.values[rightidx].priority
                if (swap === null && right < parentElement || swap !== null && right < left) {
                    swap = rightidx
                }
            }
            if (swap === null) break
            this.swap(this.values, parentidx, swap)
            parentidx = swap
        }
    }

}

let queue = new PriorityQueue()

queue.enqueue(53, 4)
queue.enqueue(45, 3)
queue.enqueue(34, 2)
queue.enqueue(3, 1)
queue.enqueue(38, 3)
queue.enqueue(20, 2)
queue.enqueue(70, 7)
console.log(queue.dequeue())
console.log(queue)