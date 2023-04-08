// const swap = (arr, idx1, idx2) => {
//     [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
// }

// function bubbleSort(arr) {
//     let noswap
//     for (let i = arr.length; i > 0; i--){
//         noswap = true
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[j] > arr[j + 1]) swap(arr, j, j + 1)
//             noswap = false
//         }
//         if (noswap === true) {
//             return arr
//         }
//     }
//     return arr
// }

// const selectionSort = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         let lowest = i
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[j] < arr[lowest]) lowest = j
//         }
//         if (i !== lowest) swap(arr, i, lowest)
//     }
//     return arr
// }

// console.log(selectionSort([4, 2, 9, 2, 7, 3, 1, 5]))

// const insertionSort = (arr) => {
//     for (let i = 1; i < arr.length; i++) {
//         for (let j = 0; j < i; j++) {
//             if (arr[i] < arr[j]) swap(arr, i, j)
//         }
//     }
//     return arr
// }

// console.log(insertionSort([4, 2, 9, 2, 7, 3, 1, 5]))

function swap(arr, idx1, idx2) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

function bubbleSort(arr) {
  let noswap;
  for (let i = arr.length; i > 0; i++) {
    noswap = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) swap(arr, j, j + 1);
    }
    if (noswap) break;
  }
}
console.log(bubbleSort([4, 2, 9, 2, 7, 3, 1, 5]));

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) lowest = j;
    }
    if (i !== lowest) swap(arr, i, lowest);
  }
  return arr;
}

console.log(selectionSort([4, 2, 9, 2, 7, 3, 1, 5]));

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = i;
    for (let j = i - 1; j >= 0; j++) {
      if (arr[current] < arr[j]) swap(arr, current, j);
      current = j;
    }
  }
}

console.log(insertionSort([4, 2, 9, 2, 7, 3, 1, 5]));
