/* eslint-disable no-unused-vars */
function includes(array, value) {
  let result = false;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      result = true;
    }
  }
  return result;
}
