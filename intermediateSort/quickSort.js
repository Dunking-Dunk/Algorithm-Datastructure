// Like merge sort, exploits the fact that arrays of 0 or 1 elements are always sorted
// works by selecting one element (called the pivot) and finding the index where the pivot should end up in the sorted array

//Pivot Helper

// const pivot = (arr, start = 0, end = arr.length - 1) => {
//     const swap = (arr, idx1, idx2) => {
//         [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
//     }
//     let pivot = arr[start]
//     let pivotIdx = start
//     for (let i = start + 1; i <= end; i++) {
//         if (pivot > arr[i]) {
//             pivotIdx++
//             if (i !== pivotIdx) swap(arr, pivotIdx, i)
//         }
//     }
//     swap(arr, start, pivotIdx)
//     return pivotIdx
// }

// const quickSort = (arr, left = 0, right = arr.length - 1) => {
//     if (left < right) {
//         const idx = pivot(arr, left, right)
//         quickSort(arr, left, idx - 1)
//         quickSort(arr, left = idx + 1, right)
//     }
//     return arr
// }

const pivot = (arr, start = 0, end = arr.length - 1) => {
  function swap(arr, idx1, idx2) {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  }
  let pivot = arr[start];
  let pivotIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      pivotIdx++;
      if (i !== pivotIdx) swap(arr, i, pivotIdx);
    }
  }
  swap(arr, pivotIdx, start);
  return pivotIdx;
};

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let idx = pivot(arr, left, right);
    quickSort(arr, left, idx - 1);
    quickSort(arr, idx + 1, right);
  }
  return arr;
}

console.log(quickSort([4, 3, 2, 5]));
