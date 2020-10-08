/* eslint-disable no-unused-vars */
function reverseWords(string) {
  const word = string.split(' ');
  for (let i = 0; i < word.length; i++) {
    word[i] = word[i].split('').reverse().join('');
  }
  return word.join(' ');
}
