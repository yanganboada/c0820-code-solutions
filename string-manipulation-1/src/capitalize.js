/* eslint-disable no-unused-vars */
function capitalize(word) {
  let result = word.charAt(0).toUpperCase();
  for (let i = 1; i < word.length; i++) {
    result += word[i].toLowerCase();
  }
  return result;
}
