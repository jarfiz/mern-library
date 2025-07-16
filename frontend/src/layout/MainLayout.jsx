import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const MainLayout = () => {
  return (
    <div>
      {/* header */}
      <Navbar />
      <main>
        <Outlet />
      </main>

      {/* footer */}
    </div>
  );
};

export default MainLayout;
