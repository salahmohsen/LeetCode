const isPalindrome = function (x) {
  return Number(String(x).split("").reverse().join("")) === Number(x);
};

console.log(isPalindrome(121));
console.log(isPalindrome(122));
