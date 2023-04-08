//len 012|10
//i   123
//lsp [0,1,2]
//pat = aaabaaa
//      0123

// function computeLPSArray(pat, M, lps) {
//   let len = 0;
//   let i = 1;
//   lps[0] = 0;

//   while (i < M) {
//     if (pat.charAt(i) == pat.charAt(len)) {
//       len++;
//       lps[i] = len;
//       i++;
//     } else {
//       if (len != 0) {
//         len = lps[len - 1];
//       } else {
//         lps[i] = len;
//         i++;
//       }
//     }
//   }
// }

// function KMPSearch(pat, txt) {
//   const M = pat.length;
//   const N = txt.length;

//   let lps = [];
//   let j = 0;

//   computeLPSArray(pat, M, lps);
//   console.log(lps);
//   var i = 0;
//   while (N - i >= M - j) {
//     if (pat.charAt(j) == txt.charAt(i)) {
//       j++;
//       i++;
//     }
//     if (j == M) {
//       console.log("Found pattern " + "at index " + (i - j) + "\n");
//       j = lps[j - 1];
//     } else if (i < N && pat.charAt(j) != txt.charAt(i)) {
//       if (j != 0) j = lps[j - 1];
//       else i = i + 1;
//     }
//   }
// }

// var txt = "sunhursunsunsunsun";
// var pat = "sun";
// KMPSearch(pat, txt);

function computeLPSArray(pat, M, lps) {
  let len = 0;
  let i = 1;
  lps[0] = 0;

  while (i < M) {
    if (pat.charAt(i) == pat.charAt(len)) {
      len++;
      lps[i] = len;
      i++;
    } else {
      if (len != 0) {
        len = lps[len - 1];
      } else {
        lps[i] = len;
        i++;
      }
    }
  }
}
const lps = [];
console.log(computeLPSArray("aaabbssbb", 9, lps));
console.log(lps);
