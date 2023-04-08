function fibMonaccianSearch(arr, x, n) {
  let fib2 = 0;
  let fib1 = 1;
  let fibm = fib2 + fib1;
  let offset = -1;
  while (fibm < n) {
    fib2 = fib1;
    fib1 = fibm;
    fibm = fib1 + fib2;
  }

  while (fibm > 1) {
    let i = Math.min(fib2 + offset, n - 1);

    if (arr[i] < x) {
      fibm = fib1;
      fib1 = fib2;
      fib2 = fibm - fib1;
      offset = i;
    } else if (arr[i] > x) {
      fibm = fib2;
      fib1 = fib1 - fib2;
      fib2 = fibm - fib1;
    } else return i;
  }

  if (fib1 && arr[n - 1] === x) return n - 1;

  return n - 1;
}

/* driver code */
let arr = [10, 22, 35, 40, 45, 50, 80, 82, 85, 90, 100, 235];
let n = arr.length;
let x = 35;
let ind = fibMonaccianSearch(arr, x, n);
console.log(ind);
