import { Link } from 'react-router-dom';
import { useUserSignup } from '../../utils/useUserSignup';
import { useDocumentTitle } from '../../utils/useDocumentTitle';
import './auth.css';

const Signup = () => {
  useDocumentTitle('Signup | TechFlix');
  const {
    formData,
    handleSubmit,
    loading,
    handleChange,
    showPassword,
    setShowPassword,
  } = useUserSignup();

  const { firstName, lastName, email, password, confirmPassword, errors } =
    formData;

  return (
    <main className='minheight flex align-items-center'>
      <div className='auth-container mx-auto w-100 my-6'>
        <form onSubmit={handleSubmit}>
          <div className='mb-3 grid gap-1'>
            <div className='col-6'>
              <label htmlFor='firstname' className='label'>
                First Name
              </label>
              <input
                type='text'
                className={`input ${errors.firstName && 'border-danger'}`}
                name='firstName'
                id='firstName'
                value={firstName}
                onChange={handleChange}
              />
              <span className='message txt-danger'>{errors.firstName}</span>
            </div>
            <div className='col-6'>
              <label htmlFor='lastname' className='label'>
                Last Name
              </label>
              <input
                type='text'
                className={`input ${errors.lastName && 'border-danger'}`}
                name='lastName'
                id='lastName'
                value={lastName}
                onChange={handleChange}
              />
              <span className='message txt-danger'>{errors.lastName}</span>
            </div>
          </div>
          <div className='mb-3'>
            <label htmlFor='username' className='label'>
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
            <input
              type={showPassword ? 'text' : 'password'}
              className={`input ${errors.password && 'border-danger'}`}
              name='password'
              id='password'
              value={password}
              onChange={handleChange}
            />
            <span className='message txt-danger'>{errors.password}</span>
          </div>
          <div className='mb-3'>
            <label htmlFor='confirmPassword' className='label'>
              Confirm Password
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              className={`input ${errors.confirmPassword && 'border-danger'}`}
              name='confirmPassword'
              id='confirmPassword'
              value={confirmPassword}
              onChange={handleChange}
            />
            <span className='message txt-danger'>{errors.confirmPassword}</span>
          </div>

          <div className='mb-3'>
            <input
              type='checkbox'
              id='show-password'
              checked={showPassword}
              onChange={(e) => setShowPassword(e.target.checked)}
            />
            <label htmlFor='show-password' className='ml-2'>
              Show Password
            </label>
          </div>

          <button className='btn btn-primary w-100 mb-3' disabled={loading}>
            {loading ? (
              <i className='fa-solid fa-circle-notch fa-spin'></i>
            ) : (
              'Sign Up'
            )}
          </button>

          <p className='txt-center'>
            Already have an account?{' '}
            <Link to='/login' className='txt-underline'>
              Login
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
};

export { Signup };
