import axios from 'axios';

export const fetchClient = axios.create(() => {
  return {
    baseURL: 'http://localhost:8000/api',
    timeout: 60000,
    headers: {
      withCredentials: true,
    },
  };
});
