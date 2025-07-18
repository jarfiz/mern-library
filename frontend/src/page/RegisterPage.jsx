import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { register, reset } from '../features/auth/authSlice';
import { toast } from 'sonner';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const { name, email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isError, isLoading, isSuccess, message } = useSelector(
    (state) => state.auth,
  );

  const handleRegister = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      return toast.error('All field are required');
    }

    const user = { name, email, password };
    dispatch(register(user));
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    if (isError) toast.error(message);
    if (isSuccess || user) {
      toast.success('Creating account success, redirecting to book page');
      navigate('/books');
    }
    dispatch(reset());
  }, [dispatch, isError, isSuccess, message, navigate, user]);

  return (
    <div className='mt-20'>
      <h1 className='mb-20 text-center text-2xl font-medium'>
        Register to Library
      </h1>
      <form onSubmit={handleRegister} className='mx-auto w-5/12 space-y-2'>
        <div className='flex flex-col space-y-2'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            name='name'
            id='name'
            placeholder='Enter your name'
            value={name}
            onChange={handleChange}
          />
        </div>
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
            Already have an account?{' '}
            <Link to='/login' className='text-blue-400 hover:text-blue-600'>
              Login
            </Link>
          </p>
        </div>
        <button
          type='submit'
          className='mt-3 w-full cursor-pointer rounded-md bg-slate-800 py-2 font-medium text-slate-50 outline hover:bg-slate-700'
          disabled={isLoading}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
