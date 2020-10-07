/* eslint-disable no-unused-vars */
function isAnagram(firstString, secondString) {
  const string = firstString.split('').sort().join('').replace(/ /g, '');
  const otherString = secondString.split('').sort().join('').replace(/ /g, '');
  return string === otherString;
}
