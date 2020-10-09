/* eslint-disable no-unused-vars */
function equal(first, second) {
  let checker = true;
  for (let i = 0; i <= first.length; i++) {
    if (first[i] !== second[i]) {
      checker = false;
    }
  }
  return checker;
}
