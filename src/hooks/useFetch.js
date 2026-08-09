import { useState, useEffect } from 'react';
import api from '../services/api';

const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    const fetchData = async () => {
      try {
        const response = await api.get(url, options);
        if (isMounted) {
          setData(response.data.data); // Assuming our backend returns { success: true, data: [...] }
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.response?.data?.error || err.message || 'Something went wrong');
          setData(null);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
