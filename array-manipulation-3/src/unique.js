/* eslint-disable no-unused-vars */
function unique(array) {
  const result = [];
  array.forEach((x, index) => {
    if (array.indexOf(x) === index) {
      result.push(x);
    }
  });
  return result;
}
