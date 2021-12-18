//given an array of objects and an object, then return the place of object in the array.
export const findIdx = (arrayOfObjs, objInTheArray) => {
  return arrayOfObjs.findIndex((item) => item.name === objInTheArray.name);
};
