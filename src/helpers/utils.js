const validEmailRegex = new RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/);
export const validateEmail = (email) => {
  return validEmailRegex.test(email);
};
