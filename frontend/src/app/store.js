import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../features/auth/authSlice';
import bookSlice from '../features/book/bookSlice';

const store = configureStore({
  reducer: {
    auth: authSlice,
    book: bookSlice,
  },
});

export default store;
