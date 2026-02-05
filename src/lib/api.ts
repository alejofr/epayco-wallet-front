import axios from 'axios';

export const apiWallet = axios.create({
    baseURL: import.meta.env.VITE_URL_API || 'http://localhost:3001/api',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
});
