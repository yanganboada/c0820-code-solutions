/* eslint-disable no-unused-vars */
function zip(first, second) {
  const zip = [];
  let array = null;
  if (first.length <= second.length) {
    array = first;
  } else {
    array = second;
  }
  for (let i = 0; i < array.length; i++) {
    zip.push([first[i], second[i]]);
  }
  return zip;
}
