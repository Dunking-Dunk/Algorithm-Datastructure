//Radix Sort is a special sorting algorithm that works on lists of numbers
//it never makes comparisons between elements
//it exploits the fact that information about the size of a number is encoded in the number of digits
//more digits means a bigger number

// const getDigit1 = (num, dig) => {
//     let numstr = num.toString()
//     if (dig >= numstr.length) {
//         return 0
//     }
//     return numstr[(numstr.length - 1) - dig]
// }

// console.log(getDigit1(1435, 3))

// console.log(maxDigitCount([10342, 24356, 54553, 34, 235,6543,53,23,15335]))

// const getDigit = (num, i) => {
//   return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
// };

// const digitCount = (num) => {
//   if (num === 0) return 1;
//   return Math.floor(Math.log10(Math.abs(num))) + 1;
// };

// const maxDigitCount = (arr) => {
//   let maxDigit = 0;
//   for (let i = 0; i < arr.length; i++) {
//     let val = digitCount(arr[i]);
//     maxDigit = Math.max(maxDigit, val);
//   }
//   return maxDigit;
// };

// const radixSort = (arr) => {
//   const maxDigit = maxDigitCount(arr);
//   for (let k = 0; k < maxDigit; k++) {
//     let bucket = Array.from({ length: 10 }, () => []);
//     for (let i = 0; i < arr.length; i++) {
//       let digit = getDigit(arr[i], k);
//       bucket[digit].push(arr[i]);
//     }
//     arr = [].concat(...bucket);
//     console.log(arr);
//   }
//   return arr;
// };

const getDigit = (num, i) => {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
};

const digitCount = (num) => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
};

const maxDigitCount = (arr) => {
  let maxDigits = 0;

  return maxDigits;
};

function RadixSort(arr) {
  const maxDigits = maxDigitCount(arr);
  for (let k = 0; k < maxDigits; k++) {
    console.log(k);
    let bucket = Array.from({ length: 10 }, () => []);

    for (let i = 0; i < arr.length; i++) {
      let digit = getDigit(arr[i], k);
      bucket[digit].push(arr[i]);
    }
    arr = [].concat(...bucket);
  }
  return arr;
}

console.log(
  RadixSort([12, 54, 23, 547, 2324, 121, 5436, 5432, 2586, 34, 1, 3435, 211])
);
