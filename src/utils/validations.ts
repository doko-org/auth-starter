export const validateRequired = (name: string) => (value: string): string => {
  if (value && Array.isArray(value)) {
    return value.length ? '' : `${name} is required`;
  }
  return value ? '' : `${name} is required`;
};

export const validateEmail = (required: boolean) => (value: string): string => {
  if (required && !value) return 'Email Address is required';

  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    return 'Invalid email address';
  }

  return '';
};
