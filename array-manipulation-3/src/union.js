/* eslint-disable no-unused-vars */
function union(first, second) {
  const result = first;
  second.forEach(x => {
    if (first.indexOf(x) === -1) {
      result.push(x);
    }
  });
  return result;
}
