/* eslint-disable no-unused-vars */
function difference(first, second) {
  const result = [];
  first.forEach(x => {
    if (second.indexOf(x) === -1) {
      result.push(x);
    }
  });
  second.forEach(x => {
    if (first.indexOf(x) === -1) {
      result.push(x);
    }
  });
  return result;
}
