/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {
  if (strs.length === 0) return "";
  const sortedStrs = strs.toSorted();
  const first = sortedStrs[0];
  const last = sortedStrs.at(-1);
  const minLength = Math.min(first.length, last.length);
  let i = 0;
  while (i < minLength && first[i] === last[i]) {
    i++;
  }
  return first.substring(0, i);
}
