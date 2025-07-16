import axios from 'axios';
import { ALL_BOOKS, BOOK_ID } from '../constant';

const baseURL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

const axiosInstance = axios.create({
  baseURL,
});

// helper
const configToken = (token) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

const getAllBooks = async (token) => {
  const response = await axiosInstance.get(ALL_BOOKS, configToken(token));
  return response.data;
};

const getBookById = async (token, id) => {
  const response = await axiosInstance.get(
    `${BOOK_ID}/${id}`,
    configToken(token),
  );
  return response.data;
};

const bookService = { getAllBooks, getBookById };
export default bookService;
