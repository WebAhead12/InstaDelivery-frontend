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

export const addressValidationRegex = (str) => {
  const regex = /^[#.0-9a-zA-Z\s,-]+$/;
  return regex.test(str);
};

export const zipcodeValidationRegex = (num) => {
  const regex = /^[0-9]*$/;
  return regex.test(num);
};
export const emailValidationRegex = (str) => {
  const regex = /^[a-zA-Z0-9.]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return regex.test(str);
};

export const phoneValidationRegex = (num) => {
  const regex = /^\(?([0,5]{2})\)?\(?\d{1}\)?\d{3}\d{4}$/;
  return regex.test(num);
};
