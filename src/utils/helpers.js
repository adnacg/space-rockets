export const removeItem = (object, item) => {
  return Object.keys(object).reduce((newObject, key) => {
    if (key !== item) {
      newObject[key] = object[key];
    }
    return newObject;
  }, {});
};
