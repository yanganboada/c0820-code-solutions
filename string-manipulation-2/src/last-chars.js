/* eslint-disable no-unused-vars */
function lastChars(length, string) {
  let result = '';
  for (let i = string.length - length; i < string.length; i++) {
    if (string[i]) {
      result += string[i];
    }
  }
  return result;
}
