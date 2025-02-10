import express from 'express';
import { verifyToken } from './middleware/auth';

const app = express();
app.use(express.json());

const expenseClaims = [];

app.post('/expense-claims', verifyToken, (req, res) => {
    const claim = req.body;
    expenseClaims.push(claim);
    res.status(201).send('Expense claim added');
});

app.get('/expense-claims', verifyToken, (req, res) => {
    res.json(expenseClaims);
});

app.listen(3003, () => {
    console.log('Expense Claim service running on port 3003');
});