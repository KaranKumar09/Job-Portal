import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { time } from 'console';
import dotenv from 'dotenv';
import connectDB from './utils/db.js';
import userRoute from './routes/user.route.js';
import companyRoute from './routes/company.route.js';
import jobRoute from './routes/job.route.js'; // Add this line
import applicationRoute from './routes/application.route.js'; // Add this line

dotenv.config();

const app = express();

app.get('/', (req, res) => {
  return res.status(200).json({
    message: 'Welcome to the API!',
    time: new Date().toISOString(),
    success: true,
  }); 
});

//middleware
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const corsOptions = {
  origin: 'http://localhost:5121', // Adjust this to your frontend URL
  credentials: true, // Allow cookies to be sent
};

app.use(cors(corsOptions));

const PORT = process.env. PORT || 5001;

//apis
app.use("/api/user", userRoute);
app.use("/api/company", companyRoute);
app.use("/api/job", jobRoute); 
app.use("/api/application", applicationRoute); // Add this line

app.listen(PORT, () => {
    connectDB();
  console.log(`Server is running on port ${PORT}`);
});