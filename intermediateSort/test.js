// const swap = (arr, idx1, idx2) => {
//     [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
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
//     if(arr.length === 1) return arr
//     let mid = Math.floor(arr.length / 2)
//     let left = mergeSort(arr.slice(0, mid))
//     let right = mergeSort(arr.slice(mid))
//     return merge(left, right)
// }

// const pivotHelper = (arr, start = 0, end = arr.length - 1) => {
//     let pivot = arr[start]
//     let pivotIdx = start

//     for (let i = start + 1; i <= end; i++) {
//         if (pivot > arr[i]) {
//             pivotIdx++
//             if(i !== pivotIdx) swap(arr, pivotIdx, i)
//         }
//     }
//     swap(arr, pivotIdx, start)
//     return arr
// }

// const quickSort = (array, left = 0, right = array.length - 1) => {
//     if (left< right) {
//         let pivot = pivotHelper(array, left, right)
//         quickSort(array, left, pivot - 1)
//         quickSort(array, pivot + 1, right)
//     }
//     return array
// }

// const getDigit = (num, digit) => {
//     return Math.floor(Math.abs(num)/ Math.pow(10, digit)) % 10
// }

// const getDigitCount = (num) => {
//     return Math.floor(Math.log10(Math.abs(num))) + 1
// }

// const getMaxDigitCount = (arr) => {
//     let max = 0
//     for (let i = 0; i < arr.length; i++) {
//         let current = getDigitCount(arr[i])
//         max = Math.max(max, current)
//     }
//     return max
// }

// const radixSort = (arr) => {
//     let maxDigitCount = getMaxDigitCount(arr)
//     for (let i = 0; i < maxDigitCount; i++) {
//         let bucket = Array.from({ length: 10 }, () => [])
//         for (let j = 0; j < arr.length; j++) {
//            bucket[getDigit(arr[j], i)].push(arr[j])
//         }
//         arr = [].concat(...bucket)
//     }
//     return arr
// }

// console.log(radixSort([4343,3,353,123,36,575,88,5,35,36,7657,65764]))

function swap(arr, idx1, idx2) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
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
  if (arr.length === 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

console.log(
  mergeSort([
    2, 5, 3, 2, 1, 65, 76, 4, 5, 98, 70, 32, 50, 2, 2, 1, 15, 73, 24, 52, 6,
  ])
);

function pivot(arr, left = 0, right = arr.length - 1) {
  let pivot = arr[left];
  let pivotIdx = left;

  for (let i = left + 1; i < right; i++) {
    if (arr[pivotIdx] > arr[i]) {
      pivotIdx++;
      if (i !== pivotIdx) swap(arr, pivotIdx, i);
    }
  }
  swap(arr, pivotIdx, left);
  return pivotIdx;
}

function quickSort(arr, left = 0, right = arr.length) {
  if (left < right) {
    const idx = pivot(arr, left, right);
    quickSort(arr, left, idx - 1);
    quickSort(arr, idx + 1);
  }
  return arr;
}

console.log(
  quickSort([
    2, 5, 3, 2, 1, 65, 76, 4, 5, 98, 70, 32, 50, 2, 2, 1, 15, 73, 24, 52, 6,
  ])
);

function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function getDigitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}
