import axios from 'axios';
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const login = async (email, password) => {
  try {
    const response = await api.post('/auth/login', { email, password });
    return response.data;
  } catch (error) {
    throw error.response?.data || 'Login failed';
  }
};

export const register = async (userData) => {
  try {
    const response = await api.post('/auth/register', userData);
    return response.data;
  } catch (error) {
    throw error.response?.data || 'Registration failed';
  }
};

export const fetchUserProfile = async (token) => {
  try {
    const response = await api.get('/user/profile', {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || 'Failed to fetch user profile';
  }
};

export const fetchLearningMaterials = async (token) => {
  try {
    const response = await api.get('/learning/materials', {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || 'Failed to fetch learning materials';
  }
};

export const fetchJobListings = async (token) => {
  try {
    const response = await api.get('/jobs', {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || 'Failed to fetch job listings';
  }
};

export default api;
