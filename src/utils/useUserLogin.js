import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useMessage } from '../context/messageContext';
import { validateLogin, validateLoginField } from './validate';
import { login } from '../actions/userActions';
import { useUser } from '../context/userContext';

const useUserLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    errors: {
      email: '',
      password: '',
    },
  });

  const [showPassword, setShowPassword] = useState(false);

  const {
    authState: { isAuthenticated, loading },
    setAuth,
  } = useUser();

  const { setMessages } = useMessage();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/';

  useEffect(() => {
    if (isAuthenticated) {
      navigate(from, { replace: true });
    }
  }, [navigate, from, isAuthenticated]);

  const fillTestCredentials = (e) => {
    e.preventDefault();
    setFormData((prevState) => ({
      email: 'john@gmail.com',
      password: '123456',
      errors: {
        email: '',
        password: '',
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { isValid, errors } = validateLogin(formData);

    if (isValid) {
      const { email, password } = formData;
      const loginCredentials = {
        email,
        password,
      };

      login(setAuth, setMessages, loginCredentials);

      setFormData({
        email: '',
        password: '',
        errors: {
          email: '',
          password: '',
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
    const error = validateLoginField(name, value, formData);
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
    loading,
    fillTestCredentials,
    handleSubmit,
  };
};

export { useUserLogin };
