import axios from 'axios';

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000', // Backend server URL
});

// Optional: Add interceptors for authorization
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token'); // Retrieve token from local storage
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export default api;