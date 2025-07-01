// Email validation
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Password validation - simplified (just check if not empty)
export const isValidPassword = (password: string): boolean => {
  return password.length > 0;
};

// URL validation
export const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

// Phone number validation (basic)
export const isValidPhoneNumber = (phone: string): boolean => {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
};

// Required field validation
export const isRequired = (value: any): boolean => {
  if (typeof value === 'string') {
    return value.trim().length > 0;
  }
  return value !== null && value !== undefined;
};

// Min length validation
export const hasMinLength = (value: string, minLength: number): boolean => {
  return value.length >= minLength;
};

// Max length validation
export const hasMaxLength = (value: string, maxLength: number): boolean => {
  return value.length <= maxLength;
};

// Number range validation
export const isInRange = (value: number, min: number, max: number): boolean => {
  return value >= min && value <= max;
};

// Form validation helper
export const validateField = (
  value: any,
  rules: {
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    pattern?: RegExp;
    custom?: (value: any) => string | undefined;
  }
): string | undefined => {
  if (rules.required && !isRequired(value)) {
    return 'This field is required';
  }

  if (typeof value === 'string') {
    if (rules.minLength && !hasMinLength(value, rules.minLength)) {
      return `Minimum length is ${rules.minLength} characters`;
    }

    if (rules.maxLength && !hasMaxLength(value, rules.maxLength)) {
      return `Maximum length is ${rules.maxLength} characters`;
    }

    if (rules.pattern && !rules.pattern.test(value)) {
      return 'Invalid format';
    }
  }

  if (rules.custom) {
    return rules.custom(value);
  }

  return undefined;
}; 