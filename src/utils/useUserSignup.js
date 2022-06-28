import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { signup } from '../actions/userActions';
import { useMessage } from '../context/messageContext';
import { useUser } from '../context/userContext';
import { validateSignup, validateSignupField } from './validate';

const useUserSignup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    errors: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const {
    authState: { isAuthenticated, loading },
    setAuth,
  } = useUser();

  const [showPassword, setShowPassword] = useState(false);

  const { setMessages } = useMessage();

  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from || '/';

  useEffect(() => {
    if (isAuthenticated) {
      navigate(from, { replace: true });
    }
  }, [navigate, from, isAuthenticated]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { isValid, errors } = validateSignup(formData);

    if (isValid) {
      const { firstName, lastName, email, password } = formData;
      const userDetails = {
        firstName,
        lastName,
        email,
        password,
      };

      signup(setAuth, setMessages, userDetails);

      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        errors: {
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          confirmPassword: '',
        },
      });
    } else {
      setFormData((prevState) => ({
        ...prevState,
        errors: { ...prevState.errors, ...errors },
      }));
    }
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    const error = validateSignupField(name, value, formData);
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
      errors: { ...formData.errors, [name]: error },
    }));
  };

  return {
    handleChange,
    showPassword,
    setShowPassword,
    formData,
    handleSubmit,
    loading,
  };
};

export { useUserSignup };
