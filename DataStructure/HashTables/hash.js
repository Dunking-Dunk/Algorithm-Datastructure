//Hashing function
// function hash(key, arrLen) {
//     let total = 0
//     let WEIRD_PRIME = 31
//     for (let i = 0; i < Math.min(key.length, 100); i++) {
//         total = total + (key.charCodeAt(i) - 96) + WEIRD_PRIME
//     }
//     return total % arrLen
// }

//insert O(1)
//deletion O(1)
//Access O(1)


//Dealing with collision
    //seprate chaining
        //with seprate chaining , at each index in our array we store values using a node sophiscticated data structure (eg: an array or linked list)
    //linear Probing
        //when we find a collision, we search though the array to find the next empty slot

class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size)
    }

    _hash(key) {
        let total = 0
        let WEIRD_PRIME = 31
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            total = total + (key.charCodeAt(i) - 96) + WEIRD_PRIME
        }
        return total % this.keyMap.length
    }

    set(key, value) {
        let idx = this._hash(key)
        if (!this.keyMap[idx]) {
            this.keyMap[idx] = []
        }
        this.keyMap[idx].push([key, value])
        return this.keyMap[idx]
    }

    get(key) {
        let index = this._hash(key)
        if (this.keyMap[index]) {
            for (let i = 0; i < this.keyMap[index].length; i++) {
                if (key === this.keyMap[index][i][0]) {
                    return this.keyMap[index][i][1]
                }
            }
        }
        return undefined
    }

    keys() {
        let key = []
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!key.includes(this.keyMap[i][j][0])) {
                        key.push(this.keyMap[i][j][0])
                    }
                }
            }
        }
        return key
    }

    values() {
        let values = []
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    values.push(this.keyMap[i][j][1])
                }
            }
        }
        return values
    }
}

let ht = new HashTable(11)

ht.set('black', '#000')
ht.set('white', '#fff')
ht.set('red', '#142042')
ht.set('red', '#142042')
ht.set('blue', '#125312')
ht.set('naree', '#429022')
ht.set('bleed', '#934242')
console.log(ht.values())
console.log(ht.keys())