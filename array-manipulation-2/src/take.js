/* eslint-disable no-unused-vars */
function take(array, count) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (i < count) {
      result.push(array[i]);
    }
  }
  return result;
}
