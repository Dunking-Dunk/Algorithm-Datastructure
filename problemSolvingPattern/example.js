// function add(num1 = 0, num2 = 0) {
//     return num1 + num2
// }

// console.log(add(3, 4))

// function charCount(str) {
//     const d = str.toLowerCase()
//     let charCounts = {}
//     for (let i of d) {
//         if (i.charCodeAt() > 96 && i.charCodeAt() < 123) {
//             charCounts[i] = ++charCounts[i] || 1
//         }
//     }
//     return charCounts
// }

// function charCount(str) {
//   const lower_str = str.toLowerCase();
//   let charCount = {};

//   for (let i of lower_str) {
//     if (i.charCodeAt() > 96 && i.charCodeAt() < 123)
//       charCount[i] = ++charCount[i] || 1;
//   }
//   return charCount;
// }

// console.log(charCount(" 12345 Hhursun is the best 12345"));

// let array1 = [1, 2, 3];
// let array2 = [1, 4, 9];

// function Freq(arr1, arr2) {
//   if (arr1.length !== arr2.length) return false;
//   let freqCount1 = {};
//   let freqCount2 = {};
//   for (let i of arr1) freqCount1[i] = ++freqCount1[i] || 1;
//   for (let j of arr2) freqCount2[j] = ++freqCount2[j] || 1;
//   for (let i in freqCount1) {
//     if (!(i ** 2 in freqCount2)) return false;
//     if (freqCount1[i] !== freqCount2[i ** 2]) return false;
//   }

//   return true;
// }

// console.log(Freq(array1, array2));

//anagram same as above

//counting unique value multiple Pointer

// function countUniqueValues(arr) {
//   if (arr.length === 0) return 0;
//   let unique = 0;
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[unique] !== arr[i]) {
//       unique++;
//       arr[unique] = arr[i];
//     }
//   }
//   return unique + 1;
// }

// console.log(countUniqueValues([1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 7]));

//sliding window

function sumCons(arr, n) {
  if (arr.length < n) return null;

  let temp = 0;
  let max = 0;

  for (let i = 0; i < n; i++) max += arr[i];
  temp = max;
  for (let i = n; i < arr.length; i++) {
    temp = temp - arr[i - n] + arr[i];
    max = Math.max(temp, max);
  }
  return temp;
}

console.log(
  sumCons([1, 2, 4, 3, 6, 4, 6, 4, 3, 4, 6, 7, 8, 9, 5, 5, 6, 5, 4, 4, 5, 5], 3)
);
