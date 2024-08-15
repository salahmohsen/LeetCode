/**
 * @param {number} x
 * @return {number}
 */

const x = 123;
const y = -123;
const s = 120;

var reverse = function (x) {
  const INT_MAX = 2 ** 31 - 1;
  const INT_MIN = -(2 ** 31);
  const isNegative = x < 0;
  const reversed = Math.abs(x).toString().split("").reverse().join("");
  const result = isNegative ? -reversed : reversed;
  return result > INT_MAX || result < INT_MIN ? 0 : result;
};
