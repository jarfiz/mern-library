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

export const getBookById = createAsyncThunk('book/id', async (id, thunkAPI) => {
  try {
    const token = await thunkAPI.getState().auth?.user?.token;
    return await bookService.getBookById(token, id);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const createBook = createAsyncThunk(
  'book/create',
  async (book, thunkAPI) => {
    try {
      const token = await thunkAPI.getState().auth?.user?.token;
      return await bookService.createBook(book, token);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const updatedBook = createAsyncThunk(
  'book/update',
  async (data, thunkAPI) => {
    const { id, book } = data;
    try {
      const token = await thunkAPI.getState().auth.user.token;
      return await bookService.updatedBook(token, id, book);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const deleteBook = createAsyncThunk(
  'book/delete',
  async (id, thunkAPI) => {
    try {
      const token = await thunkAPI.getState().auth?.user?.token;
      return await bookService.deleteBook(token, id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

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
      })
      .addCase(getBookById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBookById.fulfilled, (state, action) => {
        state.books = action.payload;
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(deleteBook.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.books = state.books.filter(
          (book) => book._id !== action.payload.id,
        );
      })
      .addCase(deleteBook.rejected, (state, action) => {
        state.isLoading = false;
        state.message = action.payload;
      })
      .addCase(createBook.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createBook.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.books.push(action.payload);
      })
      .addCase(createBook.rejected, (state, action) => {
        state.isLoading = false;
        state.message = action.payload;
      })
      .addCase(updatedBook.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updatedBook.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.books = state.books.filter(
          (book) => book._id === action.payload.id,
        );
      })
      .addCase(updatedBook.rejected, (state, action) => {
        state.isLoading = false;
        state.message = action.payload;
      });
  },
});

export const { reset } = bookSlice.actions;
export default bookSlice.reducer;
