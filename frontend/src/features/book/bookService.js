import axios from 'axios';
import { ALL_BOOKS } from '../constant';

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

const bookService = { getAllBooks };
export default bookService;
