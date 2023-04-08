// function binarySearch1(search, array) {
//     const len = Math.floor(array.length/ 2)
//     if (array[len][0] > search[0]) {
//         for (let i = len; i > 0; i--) {
//             if (array[i] === search) {
//                 return i
//             }
//         }
//     }
//     if (array[len][0] < search[0]) {
//         for (let i = len; i < array.length; i++) {
//             if (array[i] === search) {
//                 return i
//             }
//         }
//     }
//     if (array[len] === search) return len
//     return -1
// }
// console.log(binarySearch1('Texas', states))

// function binarySearch2(search, array) {
//   let start = 0;
//   let stop = array.length - 1;
//   let mid = Math.floor((start + stop) / 2);
//   while (array[mid] !== search && start <= stop) {
//     if (search < array[mid]) stop = mid - 1;
//     if (search > array[mid]) start = mid + 1;
//     mid = Math.floor((start + stop) / 2);
//   }
//   return mid;
// }

function binarySearch(search, array) {
  let start = 0;
  let stop = array.length - 1;
  let mid = Math.floor((start + stop) / 2);
  while (array[mid] !== search && start <= stop) {
    if (search < array[mid]) stop = mid - 1;
    if (search > array[mid]) start = mid + 1;
    mid = Math.floor((start + stop) / 2);
  }
  return mid;
}

console.log(binarySearch(14, [1, 2, 4, 6, 8, 9, 14, 16]));
