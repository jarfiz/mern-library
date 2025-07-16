import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: '',
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    reset: () => initialState,
  },
});

export const { reset } = bookSlice.actions;
export default bookSlice.reducer;
