export const isEmailValid = (email) => {
  return /\S+@\S+\.\S+/.test(email);
};

export const isPasswordStrong = (password) => {
  return password.length >= 6;
};
