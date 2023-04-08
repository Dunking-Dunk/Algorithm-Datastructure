// A sorting algorithm where the largest values bubble up to the top (sinkingsort)

// function swap1(arr, idx1, idx2) {
//   let temp = arr[idx1];
//   arr[idx1] = arr[idx2];
//   arr[idx2] = temp;
// }

// //time O(nm)
// function bubbleSort(arr) {
//   function swap2(arr, idx1, idx2) {
//     [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
//   }
//   let noSwap;
//   for (let i = arr.length; i > 0; i--) {
//     noSwap = true;
//     for (let j = 0; j < i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         swap2(arr, j, j + 1);
//         noSwap = false;
//       }
//     }
//     if (noSwap) break;
//   }
//   return arr;
// }

// console.log(bubbleSort([1, 2, 4, 3, 6, 7, 5, 6]));

// const bubbleSort2 = (arr) => {
//   const swap = (arr, idx1, idx2) => {
//     [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
//   };

//   let noSwap;
//   for (let i = arr.length; i > 0; i--) {
//     noSwap = true;
//     for (let j = 0; j < i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         swap(arr, j, j + 1);
//         noSwap = false;
//       }
//     }
//     if (noSwap) break;
//   }
// };

//[3,5,4,2,1]

function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

function bubbleSort(arr) {
  let noSwap;
  for (let i = arr.length; i > 0; i--) {
    noSwap = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
  return arr;
}

console.log(bubbleSort([1, 2, 4, 3, 6, 7, 5, 6]));
