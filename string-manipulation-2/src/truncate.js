/* eslint-disable no-unused-vars */
function truncate(length, string) {
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (i < length) {
      result += string[i];
    }
  }
  return `${result}...`;
}
