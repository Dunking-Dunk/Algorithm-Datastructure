// const collectOddNumber = (arr) => {
//     let result = []
//     const helper = (helpInput) => {
//         if (helpInput.length === 0) {
//             return
//         }
//         if (helpInput[0] % 2 !== 0) {
//             result.push(helpInput[0])
//         }
//         helper(helpInput.slice(1))
//     }
//     helper(arr)
//     return result
// }

// // console.log(collectOddNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5]))

// const collectOddNumber2 = (arr) => {
//     let newArr = []

//     if (arr.length === 0) {
//         return newArr
//     }
//     if (arr[0] % 2 !== 0) {
//         newArr.push(arr[0])
//     }
//     newArr = newArr.concat(collectOddNumber2(arr.slice(1)))
//     return newArr
// }


// console.log(collectOddNumber2([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5]))

// function factorial(x){
//     if (x < 0 ) return 0;
//     if (x <= 1 ) return 1;
//     return x * factorial(x-1);
// }
 
// console.log(factorial(3))

// function productOfArraySol(arr) {
//     if (arr.length === 0) {
//         return 1
//     }
//     return arr[0] * productOfArraySol(arr.slice(1))
// }

// console.log(productOfArraySol([1,2,3,4]))

// function fibonnaci(n) {
//     if (n <= 2) return 1
//     return fibonnaci(n - 1) + fibonnaci(n - 2)
// }