// const merge1 = (arr1, arr2) => {
//     const swap = (arr, idx1, idx2) => {
//         [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
//     }
//     const array = arr1.concat(arr2)
//     let noswap;
//     for (let i = array.length; i > 0; i--) {
//         noswap = true
//         for (let j = 0; j < i - 1; j++) {
//             if (array[j] > array[j + 1]) swap(array, j, j + 1)
//             noswap=false
//         }
//         if (noswap) break
//     }
//     return array
// }

// console.log(merge1([1, 4, 3, 5], [3, 5, 4, 3, 4, 5, 352, 52, 626, 626, 26, 2, 66, 23, 64, 6, 436, 6, 436, 64, 62, 6, 236, 34, 63, 673, 67, 75, 4, 367, 6, 78, 58477, 457, 48, 54, 86, 4, 6, 36, 3, 6, 7, 36]))

// const merge2 = (arr1, arr2) => {
//     let result = []
//     let a = 0
//     let b = 0

//     while (a < arr1.length && b < arr2.length) {
//         if (arr1[a] < arr2[b]) {
//             result.push(arr1[a])
//             a++
//         }
//         else  {
//             result.push(arr2[b])
//             b++
//         }
//     }
//     while (a < arr1.length) {
//         result.push(arr1[a])
//         a++
//     }
//     while (b < arr2.length) {
//         result.push(arr2[b])
//         b++
//     }
//     return result
// }

// console.log(merge2([1, 2, 5, 6], [3, 4, 7, 8]))

// //Break up the arrays into halves until you have arrays that are empty or have one element
// // Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
// //Once the array has been merged back together, return the merged array
//Time: O(n log n)

// const mergeSort = (arr) => {
//     if (arr.length <= 1) return arr
//     const mid = Math.floor(arr.length/2)
//     const arr1 = mergeSort(arr.slice(0, mid))
//     const arr2 = mergeSort(arr.slice(mid))
//     return merge2(arr1, arr2)
// }

// const merge = (arr1, arr2) => {
//     let result = []
//     let a = 0
//     let b = 0
//     while (a < arr1.length && b < arr2.length) {
//         if (arr1[a] < arr2[b]) {
//             result.push(arr1[a])
//             a++
//         } else {
//             result.push(arr2[b])
//             b++
//         }
//     }

//     while (a < arr1.length) {
//         result.push(arr1[a])
//         a++
//     }
//     while (b < arr2.length) {
//         result.push(arr2[b])
//         b++
//     }
//     return result
// }

// const mergeSort = (arr) => {
//     if (arr.length <= 1) return arr
//     const mid = Math.floor(arr.length / 2)
//     const left = mergeSort(arr.slice(0, mid))
//     const right = mergeSort(arr.slice(mid))
//     return merge(left, right)
// }

const array = [];
while (array.length < 1000) {
  array.push(Math.floor(Math.random() * 1000));
}

function merge(arr1, arr2) {
  let result = [];
  let a = 0;
  let b = 0;

  while (a < arr1.length && b < arr2.length) {
    if (arr1[a] < arr2[b]) {
      result.push(arr1[a]);
      a++;
    } else {
      result.push(arr2[b]);
      b++;
    }
  }
  while (a < arr1.length) {
    result.push(arr1[a]);
    a++;
  }
  while (b < arr2.length) {
    result.push(arr2[b]);
    b++;
  }
  return result;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid, arr.length));
  return merge(left, right);
}

console.log(mergeSort(array));

function sumUpTo(n) {
  if (n === 1) return 1;
  return n + sumUpTo(n - 1);
}

console.log(sumUpTo(5));
