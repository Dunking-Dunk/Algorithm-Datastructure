//creating Pointer or values that correspond to an index or position and move towards beginning, end or middle based on a certain condition.
//Very efficient for solving problem with minimal space complexity as well

//time: O(n^2)
//space: O(1)
// const sumZero = (arr) => {
//     const allPair = []
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === 0) {
//                 allPair.push([arr[i], arr[j]])
//             }
//         }
//     }
//     return allPair
// }

// console.log(sumZero([-2, -1, 0, 1, 2]))

//time: O(n)
//space: O(1)
// const sumZero2 = (arr) => {
//     let allPair = []
//     let left = 0
//     let right = arr.length - 1

//     while (left < right) {
//         let sum = arr[left] + arr[right]
//         if (sum === 0) {
//             allPair.push([arr[left], arr[right]])
//             left++
//             right--
//         } else if (sum < 0) {
//             left++
//         } else {
//             right--
//         }
//     }
//     return allPair
// }
// console.log(sumZero2([-7, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 7, 5]))

//COUNTING UNIQUE VALUES

// const CountingUniqueValues = (arr) => {
//     if (arr.length === 0) {
//         return 0
//     }

//     let i = 0
//     for (let j = 1; j < arr.length; j++) {
//         if (arr[i] !== arr[j]) {
//             arr[++i] = arr[j]
//         }
//     }
//     return i + 1
// }
// console.log(CountingUniqueValues([1,1,1,1,1,1,2,2,2,2,2,3,7]))

// const countingUniqueValues = (arr) => {
//   if (arr.length === 0) {
//     return 0;
//   }
//   let i = 0;
//   for (let j = 1; j < arr.length; j++) {
//     if (arr[i] !== arr[j]) {
//       ++i;
//       arr[i] = arr[j];
//     }
//   }
//   return i + 1;
// };

function countingUniqueValues(list) {
  if (list.length === 0) return 0;

  let i = 0;
  for (let j = 1; j < list.length; j++) {
    if (list[i] !== list[j]) {
      i++;
      list[i] = list[j];
    }
  }
  return i;
}

console.log(countingUniqueValues([1, 1, 1, 2, 3, 3, 3, 4, 4, 5, 5]));
