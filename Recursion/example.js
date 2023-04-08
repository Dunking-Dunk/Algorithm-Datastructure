// function reverseStr(str) {
//     if (str.length <= 1) {
//         return str
//     }
//     return str[str.length - 1] + reverseStr(str.slice(0, str.length - 1))
// }

// console.log('hursun'.slice(0, 'hursun'.length - 1))

// console.log(reverseStr('hursun'))

// function isPallindrome(str) {
//     if (str.length === 1) return true
//     if (str.length === 2) return str[0] === str[1]
//     if (str[0] === str.slice(-1)) return isPallindrome(str.slice(1, -1))
//     return false
// }

// console.log(isPallindrome('lilol'))

// console.log('huesun'.slice(0, -1))

function capatalize(arr) {
    if (arr.length === 1) {
        return [arr[0].toUpperCase()]
    }
    let res = capatalize(arr.slice(0, -1))
    res.push(arr[arr.length - 1].toUpperCase())
    return res
}

console.log(capatalize(['hursun', 'ufdfdf', 'rgfg', 'sgdgd']))
