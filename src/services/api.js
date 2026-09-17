import axios from 'axios';

const api = axios.create({
  baseURL:
    import.meta.env.VITE_API_URL ||
    'https://react-codexaa-academy-server.vercel.app/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // Automatically include secure HTTP-only cookies in requests
});

export default api;
