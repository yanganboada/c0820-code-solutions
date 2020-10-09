/* eslint-disable no-unused-vars */
function isUpperCased(word) {
  let result = true;
  for (let i = 0; i < word.length; i++) {
    if (word[i] !== word[i].toUpperCase()) {
      result = false;
    }
  }
  return result;
}
