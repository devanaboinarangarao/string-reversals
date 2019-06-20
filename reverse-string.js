function reverse(str) {
  if (!str || str.length < 2 || typeof str != 'string') {
    return 'OHHH! this is not good';
  }
  let strArr = str.split("");

  let reverseStr = "";
  for (let i = strArr.length - 1; i >= 0; i--) {
    reverseStr += strArr[i];
  }
  return reverseStr;
}

function reverse2(str) {
  if (!str || str.length < 2 || typeof str != 'string') {
    return 'OHHH! this is not good';
  }
  let length = str.length;
  let backwards = [];
  for (let i = length - 1; i >= 0; i--) {
    backwards.push(str[i]);
  }
  return backwards.join("");
}

function reverse3(str) {
  return str.split("").reverse().join("")
}

// using single line and es6
const reverse4 = str => [...str].reverse().join("");


console.log(reverse4('This is a String'));
