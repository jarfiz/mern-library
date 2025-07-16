import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../features/auth/authSlice';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isLoading } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <header className='shadow-sm'>
      <nav className='mx-auto flex h-16 max-w-7xl items-center justify-between px-4'>
        <div>
          <Link to='/' className='text-2xl font-bold'>
            Library
          </Link>
        </div>

        <ul className='flex items-center space-x-4'>
          <li>
            <Link to='/books'>Book</Link>
          </li>
          <li>
            <Link to='/books/new'>Add Book</Link>
          </li>
        </ul>

        {user ? (
          <div className='space-x-4 text-lg font-medium'>
            <Link to='/dashboard'>Dashboard</Link>
            <Link to='/account'>Account</Link>
            <button
              className='cursor-pointer rounded-md bg-slate-800 px-4 py-1.5 text-base text-slate-50 outline hover:bg-slate-600'
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        ) : (
          <div className='flex items-center space-x-4'>
            <div>
              <Link to='/login'>Login</Link>
            </div>
            <div>
              <Link to='/register'>Register</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
