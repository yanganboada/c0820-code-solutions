/* eslint-disable no-unused-vars */
function getValues(object) {
  const values = [];
  for (const key in object) {
    const value = object[key];
    values.push(value);
  }
  return values;
}
