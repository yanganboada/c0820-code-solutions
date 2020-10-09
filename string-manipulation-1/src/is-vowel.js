/* eslint-disable no-unused-vars */
function isVowel(character) {
  const vowel = ['a', 'e', 'i', 'o', 'u'];
  let result = false;
  for (let i = 0; i < vowel.length; i++) {
    if (character === vowel[i] || character === vowel[i].toUpperCase()) {
      result = true;
    }
  }
  return result;
}
