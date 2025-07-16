import { Link } from 'react-router-dom';

const Navbar = () => {
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

        <div className='flex items-center space-x-4'>
          <div>
            <Link to='/login'>Register</Link>
          </div>
          <div>
            <Link to='/register'>Register</Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
