//mergeSort

const merge = (arr1, arr2) => {
  let result = [];
  let a = 0;
  let b = 0;
  while ((a < arr1.length) & (b < arr2.length)) {
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
};

const mergeSort = (array) => {
  if (array.length === 1) return array;
  let mid = Math.floor(array.length / 2);
  let left = mergeSort(array.slice(0, mid));
  let right = mergeSort(array.slice(mid));
  return merge(left, right);
};

console.log(
  mergeSort([
    4, 3, 6, 4, 7, 8, 9, 12, 3, 1, 5, 6, 87, 45, 3, 43, 23, 54, 12, 34, 46, 67,
    34, 47, 22, 25, 21, 14, 16, 18,
  ])
);

// quickSort

const pivotHelper = (arr, start = 0, end = arr.length - 1) => {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };
  let pivot = arr[start];
  let pivotidx = start;
  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      pivotidx++;
      if (i !== pivotidx) swap(arr, pivotidx, i);
    }
  }
  swap(arr, start, pivotidx);
  return pivotidx;
};

const quickSort = (array, left = 0, right = array.length - 1) => {
  if (left < right) {
    const idx = pivotHelper(array, left, right);
    quickSort(array, left, idx - 1);
    quickSort(array, idx + 1, right);
  }
  return array;
};

console.log(quickSort([5, 3, 6, 4, 8, 7])); // 43

const getDigit = (num, i) => {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
};

const getDigitCount = (num) => {
  return Math.floor(Math.log10(Math.abs(num))) + 1;
};

const getMaxDigitCount = (arr) => {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    const count = getDigitCount(arr[i]);
    max = Math.max(max, count);
  }
  return max;
};

const radixSort = (arr) => {
  const maxDigitCount = getMaxDigitCount(arr);
  for (let k = 0; k < maxDigitCount; k++) {
    let bucket = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < arr.length; i++) {
      let digit = getDigit(arr[i], k);
      bucket[digit].push(arr[i]);
    }
    arr = [].concat(...bucket);
  }
  return arr;
};

console.log(
  radixSort([12, 54, 23, 547, 2324, 121, 5436, 5432, 2586, 34, 1, 3435, 211])
);
