/* eslint-disable no-unused-vars */
function swapChars(firstIndex, secondIndex, string) {
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      result += string[secondIndex];
    } else if (i === secondIndex) {
      result += string[firstIndex];
    } else {
      result += string[i];
    }
  }
  return result;
}
