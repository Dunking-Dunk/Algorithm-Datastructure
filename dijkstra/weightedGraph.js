//1. Every time we look to visit a new node ,we pick the node with the smallest known distance to visit first
//2. once we've moved to the node we're going to visit, we look at each of its neighbour
//3. For each neighbour node ,we calculate the distance by summing the total edges that lead to the node we're checking from the starting node
//4. if the new total distance to a node is less than the prevoius total, we store the new shorter distance for that node

class MinPriorityQueue {
    constructor() {
        this.list = []
    }

    swap(arr, idx1, idx2) {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    }

    bubbleUp() {
        let currentIdx = this.list.length - 1
        let currentNode = this.list[currentIdx]?.priority

        while (currentIdx >= 0) {
            let parent = Math.floor((currentIdx-1)/2)
            let parentNode = this.list[parent]?.priority
            if (parentNode > currentNode) {
                this.swap(this.list, parent, currentIdx)
                currentIdx = parent
            }else break
        }
    }

    enqueue(val, priority) {
        if (this.list.length === 0) this.list.push({node: val, priority: priority})
        else {
            this.list.push({node: val, priority: priority})
            this.bubbleUp()
        }
    }

    sinkDown() {
        let parentIdx = 0
        let parentNode = this.list[parentIdx]

        while (true) {
            let left = parentIdx * 2 + 1
            let right = parentIdx * 2 + 2
            let leftNode, rightNode;
            let swap = null
            if (left < this.list.length) {
                leftNode = this.list[left]?.priority
                if (leftNode < parentNode.priority) {
                    this.swap(this.list, left, parentIdx)
                    swap = left
                }
            }
            if (right < this.list.length) {
                rightNode = this.list[right]?.priority
                if (rightNode < parentNode.priority && swap === null || rightNode < leftNode && swap) {
                    this.swap(this.list, right, parentIdx)
                    swap = right
                }
            }
            if (swap === null) break
            parentIdx = swap
            swap = null
        }
    }

    extractMin() {
        let top = this.list.shift()
        this.list.unshift(this.list.pop())
        this.sinkDown()
        return top
    }

}

class WeightedGraph{
    constructor() {
        this.list = {}
    }

    addVertex(vertex) {
        if (!this.list[vertex]) this.list[vertex] = []
    }

    removeVertex(vertex) {
        if (!this.list[vertex]) return null
        for (let i in this.list) {
           this.list[i] = this.list[i].filter(element => element !== vertex);
        }
        delete this.list[vertex]
    }

    addEdge(vertex1, vertex2, weight=0) {
        if (this.list[vertex1] && this.list[vertex2]) {
            this.list[vertex1].push({ node:vertex2, weight })
            this.list[vertex2].push({ node:vertex1, weight })
        }
    }

    removeEdge(vertex1, vertex2) {
        if (this.list[vertex1] && this.list[vertex2]) {
            this.list[vertex1] = this.list[vertex1].filter(element => element !== vertex2)
            this.list[vertex2] = this.list[vertex2].filter(element => element !== vertex1)
        }
    }

    dfTraversal(node) {
        let visted = []
        let result = []
        let list = this.list
        
        function helper(node) {
            result.push(node)
            visted[node] = true
            list[node].forEach(element => {
                if (!visted[element.node]) helper(element.node)
            });
        }

        helper(node)
        return result
    }

    dijkstras(start, end) {
        let distance = {}
        for (let i in this.list) {
            if(start === i)  distance[i] = 0
            else distance[i] = Infinity
        }
        let queue = new MinPriorityQueue()
        for (let i in distance) {
            if (i) {
                queue.enqueue(i,distance[i])
            }
        }
        let prevoius = {}
        let path = []

        for (let i in this.list) {
            prevoius[i] = null
        }
        while (queue.list.length) {
            let vertex = queue.extractMin().node
            if (vertex === end) {
                path.push(vertex)
                while(prevoius[vertex]) {
                        path.push(prevoius[vertex])
                        vertex = prevoius[vertex]
                }
                break
            }
            if (vertex || distance[vertex] !== Infinity) {
                this.list[vertex].forEach((element) => {
                    let total = element.weight + distance[vertex]
                    if (distance[element.node] > total) {
                        distance[element.node] = total
                        prevoius[element.node] = vertex
                        queue.enqueue(element.node, total)
                    }        
                })
            }
           
        }
        return path.reverse()
    }

}

let graph = new WeightedGraph()
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addVertex('E')
graph.addVertex('F')
graph.addEdge('A', 'B', 4)
graph.addEdge('A', 'C', 2)
graph.addEdge('C','D',2)
graph.addEdge('D', 'E', 3)
graph.addEdge('D', 'F', 1)
graph.addEdge('F', 'E', 1) 
graph.addEdge('C', 'F', 4)
graph.addEdge('B', 'E', 3)

// console.log(graph.list)
// console.log(graph.dfTraversal('A'))
console.log(graph.dijkstras('A','B'))

