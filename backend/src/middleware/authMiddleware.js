import jwt from 'jsonwebtoken';
import User from '../models/User.js';

// Protect routes
export const protect = async (req, res, next) => {
  let token;

  // 1. Check HTTP-only cookies first (cookie-parser populated or fallback)
  if (req.cookies && (req.cookies.auth_token || req.cookies.token)) {
    token = req.cookies.auth_token || req.cookies.token;
  } else if (req.headers.cookie) {
    // Direct header cookie parse fallback
    const match = req.headers.cookie.match(/(?:^|;\s*)(auth_token|token)=([^;]+)/);
    if (match) {
      token = decodeURIComponent(match[2]);
    }
  }

  // 2. Fallback to Authorization Bearer header if cookies not present (e.g. API clients)
  if (
    !token &&
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    res.status(401);
    return next(new Error('Not authorized, no token provided'));
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Get user from the token
    req.user = await User.findById(decoded.id).select('-password');

    if (!req.user) {
      res.status(401);
      return next(new Error('Not authorized, user not found'));
    }

    next();
  } catch (error) {
    console.error('Authentication verification failed:', error.message);
    res.status(401);
    return next(new Error('Not authorized, token failed'));
  }
};

// Admin middleware
export const admin = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next();
  } else {
    res.status(403);
    next(new Error('Not authorized as an admin'));
  }
};
