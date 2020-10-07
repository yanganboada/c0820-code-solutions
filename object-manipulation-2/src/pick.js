/* eslint-disable no-unused-vars */
function pick(source, keys) {
  const obj = {};
  for (const prop in source) {
    for (let i = 0; i < keys.length; i++) {
      if (prop === keys[i] && source[prop] !== undefined) {
        obj[prop] = source[prop];
      }
    }
  }
  return obj;
}
