import 'dotenv/config';
import app from '../src/app.js';
import connectDB from '../src/config/db.js';

// Connect to Database for Serverless
connectDB();

export default app;
