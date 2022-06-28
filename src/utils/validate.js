const validateSignupField = (name, value, formData) => {
  switch (name) {
    case 'firstName':
      return value.length >= 2 && /^[a-zA-Z ]*$/.test(value)
        ? ''
        : 'Invalid First Name';

    case 'lastName':
      return value.length >= 2 && /^[a-zA-Z ]*$/.test(value)
        ? ''
        : 'Invalid Last Name';

    case 'email':
      return /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(value) ? '' : 'Invalid Email';

    case 'password':
      return value !== '' && value.length >= 6
        ? ''
        : 'Password must contain atleast 6 characters.';

    case 'confirmPassword':
      return value !== '' && value === formData.password
        ? ''
        : 'Password does not match';

    default:
      break;
  }
};

const validateLoginField = (name, value, formData) => {
  switch (name) {
    case 'email':
      return value === '' ? 'Email is required' : '';

    case 'password':
      return value === '' ? 'Password is required' : '';

    default:
      break;
  }
};

const validateSignup = (formData) => {
  let isValid = true;
  const errors = {};
  for (const fieldName in formData.errors) {
    const error = validateSignupField(fieldName, formData[fieldName], formData);
    if (error?.length > 0) {
      isValid = false;
      errors[fieldName] = error;
    }
  }
  return { isValid, errors };
};

const validateLogin = (formData) => {
  let isValid = true;
  const errors = {};
  for (const fieldName in formData.errors) {
    const error = validateLoginField(fieldName, formData[fieldName], formData);
    if (error?.length > 0) {
      isValid = false;
      errors[fieldName] = error;
    }
  }
  return { isValid, errors };
};

const validateAddressField = (name, value, formData) => {
  switch (name) {
    case 'firstName':
      return value.length >= 2 && /^[a-zA-Z ]*$/.test(value)
        ? ''
        : 'Invalid First Name';

    case 'lastName':
      return value.length >= 2 && /^[a-zA-Z ]*$/.test(value)
        ? ''
        : 'Invalid Last Name';

    case 'phoneNumber':
      return /^\d{10}$/.test(value) ? '' : 'Invalid phone number';

    case 'state':
      return value === '' ? 'state is required' : '';

    case 'city':
      return value === '' ? 'city is required' : '';

    case 'pincode':
      return value.length !== 6 ? 'Invalid pincode' : '';

    case 'addressLine1':
      return value === '' ? 'Address details required' : '';

    default:
      break;
  }
};

const validateAddress = (formData) => {
  let isValid = true;
  const errors = {};
  for (const fieldName in formData.errors) {
    const error = validateAddressField(
      fieldName,
      formData[fieldName],
      formData
    );
    if (error?.length > 0) {
      isValid = false;
      errors[fieldName] = error;
    }
  }
  return { isValid, errors };
};

export {
  validateAddress,
  validateAddressField,
  validateLogin,
  validateSignup,
  validateLoginField,
  validateSignupField,
};
