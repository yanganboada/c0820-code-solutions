/* eslint-disable no-unused-vars */
function difference(first, second) {
  const bothArray = first.concate(second);
  console.log(bothArray);
  const result = [];
  bothArray.forEach((x, index) => {
    if (bothArray.indexOf(x) === index) {
      result.push(x);
    }
  });
  return result;
}

console.log(difference([2, 1], [2, 3]));
