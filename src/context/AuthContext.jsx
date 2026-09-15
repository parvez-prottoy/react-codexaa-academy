import { useCallback, useEffect, useState } from 'react';
import api from '../services/api';
import { AuthContext } from './auth-context';

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(() => localStorage.getItem('codexaa_token'));
  const [loading, setLoading] = useState(true);

  // Re-fetch current user profile & enrolled courses
  const refreshUser = useCallback(async () => {
    const savedToken = localStorage.getItem('codexaa_token');
    if (!savedToken) {
      setUser(null);
      setLoading(false);
      return null;
    }

    try {
      const res = await api.get('/auth/me');
      setUser(res.data);
      return res.data;
    } catch (err) {
      console.warn('Session verification failed, logging out:', err.response?.data?.message || err.message);
      localStorage.removeItem('codexaa_token');
      setToken(null);
      setUser(null);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  // Check auth session on application mount asynchronously
  useEffect(() => {
    let isMounted = true;

    const initAuth = async () => {
      const savedToken = localStorage.getItem('codexaa_token');
      if (!savedToken) {
        if (isMounted) setLoading(false);
        return;
      }

      try {
        const res = await api.get('/auth/me');
        if (isMounted) setUser(res.data);
      } catch (err) {
        console.warn('Session verification failed:', err.response?.data?.message || err.message);
        localStorage.removeItem('codexaa_token');
        if (isMounted) {
          setToken(null);
          setUser(null);
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    initAuth();

    return () => {
      isMounted = false;
    };
  }, []);

  // Login handler
  const login = useCallback(async (email, password) => {
    const res = await api.post('/auth/login', { email, password });
    const { token: authToken, ...userData } = res.data;

    localStorage.setItem('codexaa_token', authToken);
    setToken(authToken);
    setUser(userData);

    return res.data;
  }, []);

  // Register handler
  const register = useCallback(async (name, email, password) => {
    const res = await api.post('/auth/register', {
      name,
      email,
      password,
    });
    const { token: authToken, ...userData } = res.data;

    localStorage.setItem('codexaa_token', authToken);
    setToken(authToken);
    setUser(userData);

    return res.data;
  }, []);

  // Logout handler
  const logout = useCallback(() => {
    localStorage.removeItem('codexaa_token');
    setToken(null);
    setUser(null);
  }, []);

  const value = {
    user,
    token,
    loading,
    isAuthenticated: Boolean(user && token),
    login,
    register,
    logout,
    refreshUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
