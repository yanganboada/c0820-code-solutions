/* eslint-disable no-unused-vars */
function getWords(string) {
  const result = [];
  let word = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      result.push(word);
      word = '';
    } else if (i === string.length - 1) {
      word += string[i];
      result.push(word);
    } else {
      word += string[i];
    }
  }
  return result;
}
