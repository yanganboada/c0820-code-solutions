/* eslint-disable no-unused-vars */
function chunk(array, size) {
  const result = [];
  let arrayHolder = [];
  if (array.length <= size) {
    return array;
  } else {
    let counter = size;
    for (let i = 0; i < array.length; i++) {
      if (i !== counter - 1 && i !== array.length - 1) {
        arrayHolder.push(array[i]);
      } else {
        arrayHolder.push(array[i]);
        result.push(arrayHolder);
        arrayHolder = [];
        counter += size;
      }
    }
    return result;
  }
}
