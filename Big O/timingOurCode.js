// const {performance} = require('perf_hooks');

// function addUptoN(n) {
//     let sum = 0 
//     for (let i = 0; i <= n; i++) {
//         sum += i
//     }
//     return sum
// }

// let t1 = performance.now();
// console.log(addUptoN(10000000000))
// let t2 = performance.now();

// console.log((t2 - t1)/1000+ ' secounds')

// function addUptoN2(n) {
//    return n * (n + 1) / 45
// }

// let t3 = performance.now();
// console.log(addUptoN2(1000000000000000000000000000000000000000000000))
// let t4 = performance.now();

// console.log((t4 - t3)/1000+ ' secounds')

// function countingUpAndDown(n) {
//     console.log('counting from bottom to top')
//     for (let i = 0; i < n; i++) {
//         console.log(i)
//     }
//     console.log('counting from top to bottom')
//     for (let j = n - 1; j >= 0; j--) {
//         console.log(j)
//     }
//     console.log('back down')
// }

// countingUpAndDown(10)


for (let i = 0; i < 10; i++) {
    console.log(i)
}