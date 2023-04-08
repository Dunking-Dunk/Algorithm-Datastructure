function ternarySearch(l, r, key, arr) {
  if (r >= 1) {
    let mid1 = parseInt(l + (r - l) / 3);
    let mid2 = parseInt(r - (r - l) / 3);

    if (arr[mid1] === key) return mid1;
    if (arr[mid2] === key) return mid2;
    if (key < arr[mid1]) {
      return ternarySearch(l, mid1 - 1, key, arr);
    } else if (key > arr[mid2]) {
      return ternarySearch(mid2 + 1, r, key, arr);
    } else {
      return ternarySearch(mid1 + 1, mid2 - 1, key, arr);
    }
  }

  return -1;
}
const array = [1, 2, 35, 5, 73, 10, 14, 18, 32, 434, 2, 3, 5, 32, 1, 2, 23, 65];
console.log(ternarySearch(0, array.length, 65, array));
