//Builds up the sort by gradually creating a larger left by half which is always sorted

function insertion(arr) {
    function swap(arr, idx1, idx2) {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    }
    for (let i = 1; i < arr.length; i++) {
        let currentVal = i
        for (let j = i - 1; j >= 0; j--) {
            if (arr[currentVal] < arr[j]) swap(arr, currentVal, j)
            currentVal = j
        }
    }
    return arr
}
console.log(insertion([2, 54, 34, 76, 4]))
