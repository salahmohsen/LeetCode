/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isSubsequence = function (s, t) {
  let i = 0;
  for (let j = 0; j < t.length && i < s.length; j++) {
    if (s[i] === t[j]) i++;
  }
  return s.length === i;
};

console.log(
  isSubsequence("abc", "ahbgdc"), // Expected True
  isSubsequence("axc", "ahbgdc"), // Expected False
  isSubsequence("acb", "ahbgdc"), // Expected False
  isSubsequence("ab", "baab") // Expected true)
);
