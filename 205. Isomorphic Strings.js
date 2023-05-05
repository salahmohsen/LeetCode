/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false;

  const mapping = new Map();

  for (let i = 0; i < s.length; i++) {
    const sChar = s[i];
    const tChar = t[i];

    if (!mapping.has(sChar)) {
      if (Array.from(mapping.values()).includes(tChar)) return false;

      mapping.set(sChar, tChar);
    } else {
      if (mapping.get(sChar) != tChar) return false;
    }
  }

  return true;
};

console.log(isIsomorphic("badc", "baba")); // => Expected False
// console.log(isIsomorphic("foo", "bar")); // => Expected False
// console.log(isIsomorphic("egg", "add")); // => Expected True
