// dftraversal(node) {
//     const visited = {}
//     const result = []
//     const list = this.adjacencyList

//     function helper(vertex) {
//         if (!vertex) return null
//         result.push(vertex)
//         visited[vertex] = true
//         for (let i of list[vertex]) {
//             if (!visited[i]) helper(i)
//         }
//         return
//     }

//     helper(node)
//     return result
// }


class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(val) {
        if (!this.adjacencyList[val]) this.adjacencyList[val] = []
    }

    removeVertex(vertex) {
        for (let i in this.adjacencyList) {
            this.removeEdge(i, vertex)
        }
        delete this.adjacencyList[vertex]
    }

    addEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex2] && this.adjacencyList[vertex1]) {
            this.adjacencyList[vertex1].push(vertex2)
            this.adjacencyList[vertex2].push(vertex1)
        }
    }

    removeEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex2] && this.adjacencyList[vertex1]) {
            this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((vertex) => vertex !== vertex2)
            this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((vertex) => vertex !== vertex1)
        }
    }

    dftraversal1(node) {
        let visited = {}
        let result = []
        let list = this.adjacencyList
        function helper(node) {
            result.push(node)
            visited[node] = true
            list[node].forEach(element => {
                if (!visited[element]) helper(element)
            })
        }

        helper(node)
        return result
    }

    dftraversal2(node) {
        const visited = {}
        visited[node] = true
        const result = []
        let stack = [node]
        while (stack.length) {
            let node = stack.pop()
            result.push(node)
            this.adjacencyList[node]?.forEach(element => {
                if (!visited[element]) {
                    visited[element] = true
                    stack.push(element)
                }
            });
          
        }
        return result
    }

    bfTraversal(node) {
        let visited = {}
        visited[node] = true
        let result = []
        let queue = [node]

        while (queue.length) {
            let vertex = queue.shift()
            result.push(vertex)
            this.adjacencyList[vertex].forEach((element) => {
                if (!visited[element]) {
                    visited[element] = true
                    queue.push(element)
                }
                
            })
        }
        return result
    }

}

let graph1 = new Graph()
graph1.addVertex('A')
graph1.addVertex('B')
graph1.addVertex('C')
graph1.addVertex('D')
graph1.addVertex('E')
graph1.addVertex('F')
graph1.addEdge('A', 'B')
graph1.addEdge('B', 'C')
graph1.addEdge('C', 'D')
graph1.addEdge('D', 'E')
graph1.addEdge('E', 'F')
graph1.addEdge('F', 'C')
graph1.addEdge('F', 'B')
console.log(graph1.dftraversal1('A'))
console.log(graph1.dftraversal2('A'))
console.log(graph1.bfTraversal('A'))

