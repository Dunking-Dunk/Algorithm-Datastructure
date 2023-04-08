//A sorting Alogrithm where places small values into sorted position

// function selectionSort(arr) {
//     function swap2(arr, idx1, idx2) {
//         [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
//     }
//     let min;
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i; j < arr.length; j++) {
//             if (j === i) {
//                 if (arr[i] < arr[j + 1]) min = i
//                 if (arr[i] > arr[j + 1]) min = j + 1
//             }
//             if (min > arr[j + 1]) min = j + 1
//         }
//         swap2(arr, i, min)
//     }
//    return arr
// }

// console.log(selectionSort([2,3,5,3,3,6,7,6,8,6]))

// function selectionSort2(arr) {
//     function swap2(arr, idx1, idx2) {
//         [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
//     }
//     for (let i = 0; i < arr.length; i++) {
//         let lowest = i
//         for (let j = i + 1; j < arr.length; j++) {
//             if(arr[j] < arr[lowest]) lowest = j
//         }
//         if (i !== lowest) swap2(arr, i, lowest)
//     }
//    return arr
// }

// console.log(selectionSort2([2, 3, 5, 3, 3, 6, 7, 6, 8, 6]))

// const selectionSort3 = (arr) => {
//     const swap = (arr, idx1, idx2) => {
//         [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
//     }

//     for (let i = 0; i < arr.length; i++) {
//         lowest = i
//         for (let j = i + 1; j < arr.length; j++) {
//             if  (arr[lowest] > arr[j] ) lowest = j
//         }
//         if (i !== lowest) swap(arr, i, lowest)
//     }
//     return arr
// }

function selectionSort(arr) {
  function swap(arr, idx1, idx2) {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  }
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) lowest = j;
    }
    if (i !== lowest) swap(arr, i, lowest);
  }

  return arr;
}

console.log(selectionSort([2, 3, 5, 3, 3, 6, 7, 6, 8, 6]));
