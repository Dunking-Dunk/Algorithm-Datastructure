// This pattern involves creating a window which can either be an array or number from one posistion to another.
//Depending on a certain condition, the window can either increases or closes (and a new window in created)
// Very usesful for keeping track of a subset of data in an array/string etc.

//time O(n^2)
// const maxSubArraySum = (arr, n) => {
//     if (arr.length < n) {
//         return null
//     }
//     let max = -Infinity
//     for (let i = 0; i < arr.length - n + 1; i++) {
//         let temp = 0
//         for (let j = 0; j < n; j++)
//             temp += arr[i + j]

//         max = Math.max(max, temp)
//     }

//     return max
// }

// console.log(maxSubArraySum([1, 2, 3, 4, 4, 3, 2, 1], 2))

// time: O(n^2)
// const maxSubArraySum = (arr, n) => {
//     if (arr.length < n) {
//         return null;
//     }

//     let max = -Infinity
//     for (let i = 0; i < arr.length - n + 1; i++) {
//         let temp = 0
//         for (let j = 0; j < n; j++) {
//             temp += arr[i + j]
//         }
//         if (temp > max) {
//             max = temp
//         }
//     }
//     return max
// }

//time: O(n)
//space: O(1)

const maxSubArraySum = (arr, n) => {
  if (arr.length < n) {
    return null;
  }

  let temp = 0;
  let max = -Infinity;

  for (let i = 0; i < n; i++) max += arr[i];
  temp = max;
  for (let i = n; i < arr.length; i++) {
    temp = temp - arr[i - n] + arr[i];
    max = Math.sum(max, temp);
  }
  return max;
};

// const maxSubArraySum2 = (arr, n) => {
//     if (arr.length < n) {
//         return null
//     }

//     let temp = 0
//     let max = -Infinity

//     for (let i = 0; i < n; i++) max += arr[i]
//     temp = max
//     for (let j = n; j < arr.length; j++) {
//         temp = temp - arr[j - n] + arr[j]
//         max = Math.max(max, temp)
//     }
//     return max
// }

function maxSubArraySum2(arr, n) {
  if (arr.length < n) {
    return null;
  }

  let max = -Infinity;

  for (let i = 0; i < arr.length - n + 1; i++) {
    let temp = 0;
    for (let j = 0; j < n; j++) {
      temp += arr[i + j];
    }
    max = Math.max(temp, max);
  }
  return max;
}

console.log(
  maxSubArraySum2(
    [1, 2, 4, 3, 6, 4, 6, 4, 3, 4, 6, 7, 8, 9, 5, 5, 6, 5, 4, 4, 5, 5],
    3
  )
);
