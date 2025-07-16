import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../features/auth/authSlice';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector((state) => state.auth.user);
  const user = JSON.parse(data);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <header className='shadow-sm'>
      <nav className='mx-auto flex h-16 max-w-7xl items-center justify-between px-4'>
        <div>
          <Link to='/' className='text-2xl font-bold'>
            Library
          </Link>
        </div>

        <ul>
          <li>
            <Link to='/book'>Book</Link>
          </li>
        </ul>

        {user ? (
          <div className='space-x-4 text-xl font-medium'>
            <Link>{user?.name}</Link>
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
