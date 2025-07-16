import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const MainLayout = () => {
  return (
    <div>
      {/* header */}
      <Navbar />
      <main className='mx-auto max-w-7xl px-4'>
        <Outlet />
      </main>

      {/* footer */}
    </div>
  );
};

export default MainLayout;
