const states = require('./states')

function linearSearch(search, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === search) {
            return i
        }
    }
    return -1
}

console.log(linearSearch('New York', states))