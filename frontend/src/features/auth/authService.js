import axios from 'axios';
import { LOGIN, REGISTER } from '../constant';

const baseURL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

const axiosInstance = axios.create({
  baseURL,
});

const register = async (userData) => {
  const response = await axiosInstance.post(REGISTER, userData);

  // store in local storage
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }

  return response.data;
};

const login = async (userData) => {
  const response = await axiosInstance.post(LOGIN, userData);

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }

  return response.data;
};

const authService = { register, login };
export default authService;
