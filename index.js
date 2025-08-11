import express from 'express';
import { Form } from './models/Schema.js';
import handlerequests from './Routes/handlerequests.js';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './models/db.js';

dotenv.config();
connectDB();

const app=express();
const port=5000;

app.get('/', (req, res) => {
    console.log('Request received', req.body);
    res.send('Form backend is running');
});

app.use(cors());
app.use(express.json());

app.use('/user',handlerequests);

app.listen(port,()=>{
    console.log(`Server listening on port :${port}`);

});
