/* eslint-disable no-unused-vars */
function numVowels(string) {
  let counter = 0;
  for (let i = 0; i < string.length; i++) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let j = 0; j < vowels.length; j++) {
      if (string[i].toLowerCase() === vowels[j]) {
        counter++;
      }
    }
  }
  return counter;
}
