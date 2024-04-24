import express from 'express';
import dotenv from 'dotenv';
import {AdminRouter} from './routes/auth.js';
import { StudentRouter } from './routes/student.js';
import { bookRouter } from './routes/book.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import './db.js'; 
import { Book } from './models/Book.js';
import {Admin} from './models/Admin.js';
import {Student} from './models/Student.js';
const app = express();
app.use(express.json());
app.use(cors({
  origin: ['http://localhost:5173'],
  credentials: true
}));
app.use(cookieParser());
dotenv.config();
app.use('/auth', AdminRouter);
app.use('/student', StudentRouter);
app.use('/book', bookRouter);

app.get("/logout", (req, res) => {
  res.clearCookie("token"); 
  res.json({ logout: true });
});

app.get('/dashboard', async (req, res) => {
  try {
    const student = await Student.countDocuments();
    const book = await Book.countDocuments();
    const admin = await Admin.countDocuments();
    return res.json({ ok: true, student, book, admin });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ ok: false, error: 'Internal Server Error' });
  }
});

app.listen(process.env.PORT, () => console.log(`server is running on port ${process.env.PORT}`));
