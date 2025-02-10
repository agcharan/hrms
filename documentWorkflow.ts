import express from 'express';
import multer from 'multer';
import { verifyToken } from './middleware/auth';

const app = express();
const upload = multer({ dest: 'uploads/' });

app.post('/upload', verifyToken, upload.single('file'), (req, res) => {
    res.status(201).send('File uploaded');
});

app.listen(3008, () => {
    console.log('Document Workflow & Sharing service running on port 3008');
});