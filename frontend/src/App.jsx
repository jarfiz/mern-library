import { Route, Routes } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import BookPage from './page/BookPage';
import BookDetailPage from './page/BookDetailPage';
import RegisterPage from './page/RegisterPage';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route path='register' element={<RegisterPage />} />
          <Route path='books' element={<BookPage />} />
          <Route path='books/:id' element={<BookDetailPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
