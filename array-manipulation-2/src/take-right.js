/* eslint-disable no-unused-vars */
function takeRight(array, count) {
  const result = [];
  for (let i = array.length - count; i < array.length; i++) {
    if (i > 0) {
      result.push(array[i]);
    }
  }
  return result;
}
