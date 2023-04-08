function reverseString(str) {
  const reversed = str.split("").reverse().join("");
  console.log(reversed);
}

function reverseString2(str) {
  let reversed = "";
  for (let i = str.length; i > 0; i--) {
    reversed += str[i - 1];
  }
  console.log(reversed);
}

reverseString("mass");
