/* eslint-disable no-unused-vars */
function flatten(array) {
  const result = [];
  array.forEach(x => {
    if (Array.isArray(x)) {
      x.forEach(y => {
        result.push(y);
      });
    } else {
      result.push(x);
    }
  });
  return result;
}
