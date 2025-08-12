import express from 'express';
import mongoose from 'mongoose'; 
import { Form } from './models/Schema.js';
import handlerequests from './Routes/handlerequests.js';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './models/db.js';

dotenv.config();
connectDB(); 

const app = express();

app.use(cors({
  origin: 'https://your-frontend-domain.com', 
}));
app.use(express.json());

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  console.log('Request received', req.method, req.url, req.body);
  res.send('Form backend is running');
});

app.use('/user', handlerequests);

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
