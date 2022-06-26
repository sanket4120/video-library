import { Link } from 'react-router-dom';
import { useUserLogin } from '../../utils/useUserLogin';
import { useDocumentTitle } from '../../utils/useDocumentTitle';
import './auth.css';

const Login = () => {
  useDocumentTitle('Login | TechFlix');
  const {
    handleChange,
    showPassword,
    setShowPassword,
    formData,
    loading,
    fillTestCredentials,
    handleSubmit,
  } = useUserLogin();

  const { email, password, errors } = formData;

  return (
    <main className='minheight flex align-items-center'>
      <div className='auth-container mx-auto w-100 my-6'>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='email' className='label'>
              Email
            </label>
            <input
              type='email'
              className={`input ${errors.email && 'border-danger'}`}
              name='email'
              id='email'
              value={email}
              onChange={handleChange}
            />
            <span className='message txt-danger'>{errors.email}</span>
          </div>
          <div className='mb-3'>
            <label htmlFor='password' className='label'>
              Password
            </label>
            <div className='input-has-icon'>
              <input
                type={showPassword ? 'text' : 'password'}
                className={`input ${errors.password && 'border-danger'}`}
                name='password'
                id='password'
                value={password}
                onChange={handleChange}
              />
              {showPassword ? (
                <i
                  className='fa-regular fa-eye mr-2 cursor-pointer'
                  onClick={() => setShowPassword((prevState) => !prevState)}
                ></i>
              ) : (
                <i
                  className='fa-regular fa-eye-slash mr-2 cursor-pointer'
                  onClick={() => setShowPassword((prevState) => !prevState)}
                ></i>
              )}
            </div>
            <span className='message txt-danger'>{errors.password}</span>
          </div>

          <button
            className='btn btn-outline-primary mb-3 w-100'
            disabled={loading}
            onClick={fillTestCredentials}
          >
            Fill Test Credentials
          </button>

          <button className='btn btn-primary w-100 mb-3' disabled={loading}>
            {loading ? (
              <i className='fa-solid fa-circle-notch fa-spin'></i>
            ) : (
              'Login'
            )}
          </button>

          <p className='txt-center'>
            Don't have an account?{' '}
            <Link to='/signup' className='txt-underline'>
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
};

export { Login };
