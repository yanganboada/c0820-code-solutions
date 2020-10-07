/* eslint-disable no-unused-vars */
function defaults(target, source) {
  for (const key in source) {
    if (target[key] === undefined) {
      target[key] = source[key];
    }
  }
  return target;
}
