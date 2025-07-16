import { Route, Routes } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import BookPage from './page/BookPage';
import BookDetailPage from './page/BookDetailPage';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route path='books' element={<BookPage />} />
          <Route path='books/:id' element={<BookDetailPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
