/* eslint-disable no-unused-vars */
function isPalindromic(string) {
  const fomatted = string.replace(/ /g, '');
  const halfLength = Math.floor(fomatted.length / 2);
  const left = fomatted.slice(0, halfLength);
  const right = fomatted.slice(-halfLength).split('').reverse().join('');
  return left === right;
}
