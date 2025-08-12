
import express from 'express';
import { Form } from '../models/Schema.js';
import dotenv from 'dotenv';
dotenv.config();

const router = express.Router();

router.post('/submit', async (req, res) => {
    try {
        const formdata = req.body;
        const newForm = new Form(formdata);
        await newForm.save();
        res.status(201).json({ message: 'Form submitted successfully' });
    } catch (error) {
    console.error('Error submitting form:', error); 
    res.status(500).json({ message: error.message, stack: error.stack });
}

});

router.get('/getpreview/:id', async (req, res) => {
    try {
        const { id } = req.params; 
        const formdata = await Form.findById(id);

        if (!formdata) {
            return res.status(404).json({ message: 'Form not found' });
        }

        res.status(200).json(formdata);
    } catch (error) {
        console.error('Error fetching form by ID:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.post('/getpreview', async (req, res) => {
    try {
        const { email } = req.body;
        if (!email) {
            return res.status(400).json({ message: 'Email is required' });
        }
        const formdata = await Form.find({ email });
        if (formdata && formdata.length > 0) {
            console.log(formdata);
            return res.status(200).json(formdata);
        } else {
            return res.status(404).json({ message: 'No form found for this email' });
        }
    } catch (error) {
        console.log('error while fetching with email', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

export default router;
