import express from 'express';
import { verifyToken } from './middleware/auth';

const app = express();
app.use(express.json());

const transactions = [];

app.post('/transactions', verifyToken, (req, res) => {
    const transaction = req.body;
    transactions.push(transaction);
    res.status(201).send('Transaction recorded');
});

app.get('/transactions', verifyToken, (req, res) => {
    res.json(transactions);
});

app.listen(3007, () => {
    console.log('Banking service running on port 3007');
});