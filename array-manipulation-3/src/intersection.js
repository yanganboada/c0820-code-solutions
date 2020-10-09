/* eslint-disable no-unused-vars */
function intersection(first, second) {
  const result = [];
  first.forEach(x => {
    if (second.indexOf(x) !== -1) {
      result.push(x);
    }
  });
  return result;
}
