/* eslint-disable no-unused-vars */
function firstChars(length, string) {
  let result = '';
  for (let i = 0; i < length; i++) {
    if (string[i]) {
      result += string[i];
    }
  }
  return result;
}
