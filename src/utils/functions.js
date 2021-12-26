//given an array of objects and an object, then return the place of object in the array.
export const findIdx = (arrayOfObjs, objInTheArray) => {
  return arrayOfObjs.findIndex((item) => item.id === objInTheArray.id);
};

export const onlyLetters = (str) => {
  const regex = /^[a-zA-Z\s]+$/;
  return regex.test(str);
};

export const capitalizeFirst = (str) => {
  return str
    .split(" ")
    .map((x) => x.charAt(0).toUpperCase() + x.slice(1))
    .join(" ");
};

export const emailValidation = (str) => {
  const regex = /^[a-zA-Z0-9.]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return regex.test(str);
};

export const addressValidation = (str) => {
  const regex = /^[#.0-9a-zA-Z\s,-]+$/;
  return regex.test(str);
};

export const zipcodeValidation = (num) => {
  const regex = /^[0-9]*$/;
  return regex.test(num);
};

export const phoneValidation = (str) => {
  const regex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
  return regex.test(str);
};
