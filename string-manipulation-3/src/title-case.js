/* eslint-disable no-unused-vars */
function titleCase(string) {
  const lowerCase = ['a', 'an', 'and', 'as', 'at', 'but', 'by', 'en', 'for', 'if', 'in', 'nor', 'of', 'on', 'or', 'per', 'the', 'to'];
  const techWords = ['JavaScript', 'HTML', 'CSS', 'API', 'JavaScript:'];
  const lowerTechWords = techWords.map(x => x.toLowerCase());
  const word = string.split(' ');
  let result = null;

  for (let i = 0; i < word.length; i++) {
    word[i] = word[i].toLowerCase();
    if (lowerTechWords.includes(word[i])) {
      const index = lowerTechWords.indexOf(word[i]);
      word[i] = techWords[index];
    } else if (!lowerCase.includes(word[i])) {
      word[i] = word[i].charAt(0).toUpperCase() + word[i].slice(1);
    }
    result = word.join(' ');
  }

  if (result.indexOf(':') > 0 || result.indexOf('-') > 0) {
    result = result.replace(/an|the|depth/gi, x => x.charAt(0).toUpperCase() + x.slice(1));
  }

  return result;
}
