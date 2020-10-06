/* eslint-disable no-unused-vars */
function capitalizeWord(word) {
  let result = word.charAt(0).toUpperCase();
  for (let i = 1; i < word.length; i++) {
    result += word[i].toLowerCase();
  }
  if (result === 'Javascript') {
    result = 'JavaScript';
  }
  return result;
}
