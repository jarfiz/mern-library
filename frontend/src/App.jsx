import { Route, Routes } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import BookPage from './page/BookPage';
import BookDetailPage from './page/BookDetailPage';
import RegisterPage from './page/RegisterPage';
import LoginPage from './page/LoginPage';
import DashboardPage from './page/DashboardPage';
import AccountPage from './page/AccountPage';
import BookFormPage from './page/BookFormPage';
import UpdatePage from './page/UpdatePage';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route path='register' element={<RegisterPage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='books' element={<BookPage />} />
          <Route path='books/new' element={<BookFormPage />} />
          <Route path='books/update/:id' element={<UpdatePage />} />
          <Route path='books/:id' element={<BookDetailPage />} />
          <Route path='dashboard' element={<DashboardPage />} />
          <Route path='account' element={<AccountPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
