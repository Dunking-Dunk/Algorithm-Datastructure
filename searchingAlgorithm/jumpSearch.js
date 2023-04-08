function jumpSearch(key, arr, n) {
  let step = Math.sqrt(n);
  let i = 0;
  while (arr[step * i] < key) {
    i++;
  }
  for (let j = step * i - 1; j <= step * i; j++) {
    if (key === arr[j]) {
      return j;
    } else return -1;
  }
}

console.log(
  jumpSearch(
    89,
    [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610],
    16
  )
);
