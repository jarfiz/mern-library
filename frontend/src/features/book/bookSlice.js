import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import bookService from './bookService';

const initialState = {
  books: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: '',
};

export const getAllBooks = createAsyncThunk('book/all', async (_, thunkAPI) => {
  try {
    const token = await thunkAPI.getState().auth?.user?.token;
    return await bookService.getAllBooks(token);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllBooks.fulfilled, (state, action) => {
        state.books = action.payload;
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(getAllBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = bookSlice.actions;
export default bookSlice.reducer;
