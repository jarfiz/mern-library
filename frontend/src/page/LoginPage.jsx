import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../features/auth/authSlice';
import { toast } from 'sonner';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isError, isLoading, isSuccess, message } = useSelector(
    (state) => state.auth,
  );

  const handleRegister = (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error('All field are required');
    }

    const user = { email, password };
    dispatch(login(user));
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      toast.success(`Welcome back user`);
      navigate('/books');
    }
  }, [isError, isSuccess, message, navigate, user]);

  return (
    <div className='mt-20'>
      <h1 className='mb-20 text-center text-2xl font-medium'>
        Register to your Library account
      </h1>
      <form onSubmit={handleRegister} className='mx-auto w-5/12 space-y-2'>
        <div className='flex flex-col space-y-2'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Enter your email'
            value={email}
            onChange={handleChange}
          />
        </div>

        <div className='flex flex-col space-y-2'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            id='password'
            value={password}
            onChange={handleChange}
          />
        </div>
        <div>
          <p>
            Don't have an account?{' '}
            <Link to='/register' className='text-blue-400 hover:text-blue-600'>
              Register
            </Link>
          </p>
        </div>
        <button
          type='submit'
          className='mt-3 w-full cursor-pointer rounded-md bg-slate-800 py-2 font-medium text-slate-50 outline hover:bg-slate-700'
          disabled={isLoading}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
