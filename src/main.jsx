import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import axios from 'axios';
import { Provider } from 'react-redux';
import { store } from './store/store.js';

// Set up the base URL and Authorization header for axios
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const accessToken = import.meta.env.VITE_ACCESS_TOKEN;
if (!accessToken) {
  console.error('Access token is missing. Please check your environment variables.');
} else {
  axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
}

// Render the application
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </StrictMode>,
);
