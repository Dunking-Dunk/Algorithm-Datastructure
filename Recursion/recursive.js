// const countDown = (num) => {
//     if (num <= 0) {
//         console.log('All done')
//         return
//     }
//     console.log(num)
//     num--
//     countDown(num)
// }

// countDown(6)

// function sumRange(num) {
//     if (num === 1) return 1
//     return num + sumRange(num - 1)
// }

// console.log(sumRange(3))

function factorial(num) {
    if (num === 1) return 1
    return num * factorial(num-1)
}

console.log(factorial(5))