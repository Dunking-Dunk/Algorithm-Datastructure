class MinQueue {
    constructor() {
        this.list = []
    }

    swap(arr, idx1, idx2) {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    }

    enqueue(node, weight) {
        this.list.push({ node, weight })
        if (this.list.length > 1) this.bubbleUp() 
    }

    bubbleUp() {
        let currentIdx = this.list.length - 1
        let current = this.list[currentIdx].weight

        while (currentIdx > 0) {
            let parentIdx = Math.floor((currentIdx - 1) / 2)
            let parent = this.list[parentIdx]?.weight

            if (current < parent) {
                this.swap(this.list, currentIdx, parentIdx)
                currentIdx = parentIdx
            }else break
            
        }
    }

    extractMin() {
        let top = this.list.shift()
        this.list.unshift(this.list.pop())
        this.bubbleDown()
        return top
    }

    bubbleDown() {
        let parentIdx = 0
        let parent = this.list[parentIdx]?.weight

        while (true) {
            let leftIdx = parentIdx * 2 + 1
            let rightIdx = parentIdx * 2 + 2
            let swap = null
            let left, right
            
            if (leftIdx < this.list.length) {
                left = this.list[leftIdx].weight
                if (left < parent) {
                    this.swap(this.list, leftIdx, parentIdx)
                    swap = leftIdx
                }
            }
            if (rightIdx < this.list.length) {
                right = this.list[rightIdx].weight
                if (right < parent && swap == null || right < left && swap) {
                    this.swap(this.list, rightIdx, parentIdx)
                    swap = rightIdx
                }
            }

            if (swap === null) break
            else {
                parentIdx = swap
                swap = null
            }
        }
    }

}

class Graph {
    constructor() {
        this.list = {}
    }

    addVertex(vertex) {
        this.list[vertex] = []
    }

    removeVertex(vertex) {
        for (let i in this.list) {
          this.list[i] = this.list[i].filter(element => element.node !== vertex)
        }
        delete this.list(vertex)
    }

    addEdge(vertex1, vertex2, weight) {
        this.list[vertex1].push({ node: vertex2, weight })
        this.list[vertex2].push({node: vertex1, weight})
    }

    removeEdge(vertex1, vertex2) {
        this.list[vertex1] = this.list[vertex1].filter(Element => Element !== vertex2)
        this.list[vertex2] = this.list[vertex2].filter(Element => Element !== vertex1)
    }

    dijkstras(start, end) {
        let distance = {}
        let queue = new MinQueue()
        let prevoius = {}
        let path = []

        for (let i in this.list) {
            if (i === start) {
                distance[i] = 0
                queue.enqueue(i, 0)
            } else {
                distance[i] = Infinity
                queue.enqueue(i, Infinity)
            }
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

let graph = new Graph()
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
console.log(graph.dijkstras('A', 'E'))