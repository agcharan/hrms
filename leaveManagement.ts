import express from 'express';
import { verifyToken } from './middleware/auth';

const app = express();
app.use(express.json());

const leaves = [];

app.post('/leaves', verifyToken, (req, res) => {
    const leave = req.body;
    leaves.push(leave);
    res.status(201).send('Leave request added');
});

app.get('/leaves', verifyToken, (req, res) => {
    res.json(leaves);
});

app.listen(3004, () => {
    console.log('Leave Management service running on port 3004');
});