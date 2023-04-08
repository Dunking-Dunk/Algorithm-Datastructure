// bubblingSort
// this algorithm takes mac value to the end of the array
//time: O(n^2)
//space: O(1)

// function bubble(arr) {
//   function swap(arr, idx1, idx2) {
//     [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
//   }
//   let noswap;
//   for (let i = arr.length; i > 0; i--) {
//     noswap = true;
//     for (let j = 0; j < i - 1; j++) {
//       if (arr[j] > arr[j + 1]) swap(arr, j, j + 1);
//       noswap = false;
//     }
//     if (noswap) break;
//   }
//   return arr;
// }

// console.log(bubble([2, 5, 4, 7, 6, 9, 3, 5, 6, 1, 2, 4]));

// const selectionSort = (arr) => {
//   const swap = (arr, idx1, idx2) => {
//     let temp = arr[idx1];
//     arr[idx1] = arr[idx2];
//     arr[idx2] = temp;
//   };
//   for (let i = 0; i < arr.length; i++) {
//     lowest = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[lowest]) lowest = j;
//     }
//     if (lowest !== i) swap(arr, i, lowest);
//   }
//   return arr;
// };

// console.log(selectionSort([2, 5, 4, 7, 6, 9, 3, 5, 6, 1, 2, 4]));

// const insertionSort = (arr) => {
//   const swap = (arr, idx1, idx2) => {
//     [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
//   };
//   for (let i = 1; i < arr.length; i++) {
//     currentValue = i;
//     for (let j = i - 1; j >= 0; j--) {
//       if (arr[j] > arr[currentValue]) {
//         swap(arr, j, currentValue);
//         currentValue = j;
//       }
//     }
//   }
//   return arr;
// };

// console.log(insertionSort([2, 5, 4, 7, 6, 9, 3, 5, 6, 1, 2, 4]));

function swap(arr, idx1, idx2) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

function bubble(arr) {
  let noswap;
  for (let i = arr.length; i > 0; i--) {
    noswap = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noswap = false;
      }
    }
    if (noswap) break;
  }
  return arr;
}

console.log(bubble([2, 5, 4, 7, 6, 9, 3, 5, 6, 1, 2, 4]));

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) lowest = j;
    }
    if (lowest !== i) swap(arr, lowest, i);
  }
  return arr;
}

console.log(selectionSort([2, 5, 4, 7, 6, 9, 3, 5, 6, 1, 2, 4]));

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let temp = i;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > arr[temp]) {
        swap(arr, temp, j);
        temp = j;
      }
    }
  }
  return arr;
}
console.log(insertionSort([2, 5, 4, 7, 6, 9, 3, 5, 6, 1, 2, 4]));
