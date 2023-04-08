// this pattern uses objects or sets to collect values/frequency of values
// this can often avoid the need for nested loops or O(n^2) operations with array/strings

// Time: O(n ^ 2)
// Space: O(1)
// function same1(arr1, arr2) {
//     if (arr1.length !== arr2.length) {
//         return false
//     }
//     for (let i = 0; i < arr1.length; i++) {
//         let correctIndex = arr2.indexOf(arr1[i] ** 2)
//         if (correctIndex === -1) {
//             return false
//         }
//         arr2.splice(correctIndex, 1)
//     }
//     return true
// }

// console.log(`first way: ${same1([2, 3, 4], [9, 16, 4])}`)
// // Time: O(n)
// // Space: O(n)
// function same2(arr1, arr2) {
//     if (arr1.length !== arr2.length) {
//         return false
//     }
//     const freqCount1 = {}
//     const freqCount2 = {}

//     for (let val of arr1) freqCount1[val] =  (freqCount1[val] || 0)  + 1
//     for (let val of arr2) freqCount2[val] =  (freqCount1[val] || 0) + 1
//     for (let key in freqCount1) {
//         if (!(key ** 2 in freqCount2)) {
//             return false
//         }
//         if (freqCount1[key] !== freqCount2[key ** 2]) return false;
//     }
//     return true
// }

// console.log(`secound way: ${same2([2, 3, 4, 2], [9, 16, 4, 4])}`)

// time: O(n)
// space: O(n)

// function same2(arr1, arr2) {
//     if (arr1.length !== arr2.length) {
//         return false
//     }
//     let freqCounter1 = {}
//     let freqCounter2 = {}

//     for (let val of arr1) {
//         if (freqCounter1[val]) {
//             freqCounter1[val]++
//         }
//         else {
//             freqCounter1[val] = 1
//         }
//     }
//     for (let val of arr2) {
//         if (freqCounter2[val]) {
//             freqCounter2[val]++
//         }
//         else {
//             freqCounter2[val] = 1
//         }
//     }

//     for (let key in freqCounter1) {
//         if (!(key ** 2 in freqCounter2)) {
//             return false
//         }
//         if (freqCounter1[key] !== freqCounter2[key ** 2]) {
//             return false
//         }
//     }
//     return true
// }

// console.log(same2([2, 3, 4, 5, 2, 3], [4, 9, 4, 9, 16, 25]))

// function anagram(str1, str2) {
//   if (str1.length !== str2.length) {
//     return false;
//   }

//   let freqCount1 = {};
//   let freqCount2 = {};

//   for (let val of str1) freqCount1[val] = (freqCount1[val] || 0) + 1;
//   for (let val of str2) freqCount2[val] = (freqCount2[val] || 0) + 1;

//   for (let key in freqCount1) {
//     if (!(key in freqCount2)) {
//       return false;
//     }
//     if (freqCount1[key] !== freqCount2[key]) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(anagram("car", "arc"));

// function anagram2(str1, str2) {
//   if (str1.length !== str2.length) {
//     return false;
//   }

//   let freqCount1 = {};
//   for (let val of str1) freqCount1[val] = (freqCount1[val] || 0) + 1;
//   for (let val of str2) {
//     if (!freqCount1[val]) return false;
//     freqCount1[val]--;
//   }
//   return true;
// }

// console.log(anagram2("car", "arc"));

// function Counter(str1, str2) {
//   if (str1.length !== str2.length) return false;

//   let obj1 = {};
//   let obj2 = {};

//   for (let i of str1) obj1[i] = ++obj1[i] || 1;
//   for (let i of str2) obj2[i] = ++obj2[i] || 1;

//   for (let key in obj1) {
//     if (!(key in obj2)) {
//       return false;
//     }
//     if (obj1[key] !== obj2[key]) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(Counter("car", "arc"));

// anagram

function anagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  let freqCount1 = {};
  for (let i of str1) freqCount1[i] = ++freqCount1[i] || 1;
  for (let i of str2) {
    if (!freqCount1[i]) return false;
    freqCount1[i]--;
    console.log(freqCount1);
  }
  return true;
}

console.log(anagram("batt", "tabb"));
