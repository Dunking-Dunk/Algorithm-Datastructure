// function naiveCount(str, substr) {
//     if (str.length === 0 && str.length < substr.length) {
//         return 0
//     }
//     let count = 0
//     for (let i = 0; i < str.length; i++) {
//         for (let j = 0; j < substr.length; j++) {
//             if (str[i + j] !== substr[j]) break
//             if (j === substr.length - 1) count++
//             }
//         }
//     return count
// }

// console.log(naiveCount('hursunsunhursunsunsunsun', 'sun'))

// const naiveCount2 = (str, substr) => {
//     if (str.length === 0 && str.length < substr.length) {
//         return 0
//     }
//     let count = 0
//     for (let i = 0; i < str.length; i++) {
//         for (let j = 0; j < substr.length; j++) {
//             if (str[j + i] !== substr[j]) break
//             if (j === substr.length - 1) count += 1
//         }
//     }
//     return count
// }

function naiveCount(str, substr) {
  if (str.length === 0 || substr.length > str.length) return 0;
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < substr.length; j++) {
      if (str[i + j] !== substr[j]) break;
      if (j === substr.length - 1) count++;
    }
  }
  return count;
}

console.log(naiveCount("hursunsunhursunsunsunsun", "sun"));
