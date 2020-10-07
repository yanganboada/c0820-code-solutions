/* eslint-disable no-unused-vars */
function titleCase(string) {
  const lowerCase = ['a', 'an', 'and', 'as', 'at', 'but', 'by', 'en', 'for', 'if', 'in', 'nor', 'of', 'on', 'or', 'per', 'the', 'to'];
  const techWords = ['JavaScript', 'HTML', 'CSS', 'API'];
  const lowerTechWords = techWords.map(x => x.toLowerCase());
  const seperator = [':', '-'];
  const word = string.split(' ');

  for (let i = 0; i < word.length; i++) {
    const lastWordEnd = word[i].slice(-1);
    const checkSeperator = seperator.includes(lastWordEnd);
    console.log(lastWordEnd, checkSeperator);
    if (lowerTechWords.includes(word[i])) {
      const index = lowerTechWords.indexOf(word[i]);
      word[i] = techWords[index];
    } else if (checkSeperator) {
      word[i + 1] = techWords[lowerTechWords.indexOf(word[i + 1])];
    } else if (!lowerCase.includes(word[i])) {
      word[i] = word[i].charAt(0).toUpperCase() + word[i].slice(1);
    }
  }
  return word.join(' ');
}

console.log(titleCase('speaking Javascript: an in-depth guide for programmers'));
