import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import MainPage from '../page/MainPage';

const MainLayout = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      {/* header */}
      <Navbar />
      <main className='mx-auto max-w-7xl px-4'>
        {location.pathname === '/' ? <MainPage /> : <Outlet />}
      </main>

      {/* footer */}
    </div>
  );
};

export default MainLayout;
