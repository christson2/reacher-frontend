/**
 * Utility: Validation
 */

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePassword = (password: string): boolean => {
  return typeof password === 'string' && password.length >= 6;
};

export const validateRequired = (value: string): boolean => {
  return typeof value === 'string' && value.trim().length > 0;
};
