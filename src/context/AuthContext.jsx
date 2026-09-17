import { useCallback, useEffect, useState } from 'react';
import api from '../services/api';
import { AuthContext } from './auth-context';

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Re-fetch current user profile & enrolled courses
  const refreshUser = useCallback(async () => {
    try {
      const res = await api.get('/auth/me');
      setUser(res.data);
      return res.data;
    } catch (err) {
      console.warn('Session verification failed:', err.response?.data?.message || err.message);
      setUser(null);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  // Check auth session on application mount via secure HTTP-only cookie
  useEffect(() => {
    let isMounted = true;

    const initAuth = async () => {
      try {
        const res = await api.get('/auth/me');
        if (isMounted) setUser(res.data);
      } catch {
        // User is not logged in or cookie expired
        if (isMounted) setUser(null);
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
    setUser(res.data);
    return res.data;
  }, []);

  // Register handler
  const register = useCallback(async (name, email, password) => {
    const res = await api.post('/auth/register', {
      name,
      email,
      password,
    });
    setUser(res.data);
    return res.data;
  }, []);

  // Logout handler
  const logout = useCallback(async () => {
    try {
      await api.post('/auth/logout');
    } catch (err) {
      console.warn('Logout notification error:', err.response?.data?.message || err.message);
    } finally {
      setUser(null);
    }
  }, []);

  const value = {
    user,
    token: null, // Maintained for backward compatibility; actual token resides in HTTP-only cookie
    loading,
    isAuthenticated: Boolean(user),
    login,
    register,
    logout,
    refreshUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
