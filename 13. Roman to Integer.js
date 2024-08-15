/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function (s) {
  let roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  const strLength = s.length;
  let total = 0;
  for (let i = 0; i < strLength; i++) {
    if (roman[s[i]] < roman[s[i + 1]]) {
      total -= roman[s[i]];
    } else {
      total += roman[s[i]];
    }
  }
  return total;
};

romanToInt("III"); //3
romanToInt("MCMXCIV"); //1994
romanToInt("MCDLXXVI"); // 1476
romanToInt("MMMXLV"); // 3045
