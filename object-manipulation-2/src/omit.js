/* eslint-disable no-unused-vars */
function omit(source, keys) {
  const obj = {};
  for (const prop in source) {
    obj[prop] = source[prop];
    for (let i = 0; i < keys.length; i++) {
      if (prop === keys[i]) {
        delete obj[prop];
      }
    }
  }
  return obj;
}
