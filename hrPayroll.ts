import express from 'express';
import { verifyToken } from './middleware/auth';

const app = express();
app.use(express.json());

const employees = [];
const payrolls = [];

app.post('/employees', verifyToken, (req, res) => {
    const employee = req.body;
    employees.push(employee);
    res.status(201).send('Employee added');
});

app.post('/payrolls', verifyToken, (req, res) => {
    const payroll = req.body;
    payrolls.push(payroll);
    res.status(201).send('Payroll processed');
});

app.get('/employees', verifyToken, (req, res) => {
    res.json(employees);
});

app.get('/payrolls', verifyToken, (req, res) => {
    res.json(payrolls);
});

app.listen(3002, () => {
    console.log('HR & Payroll service running on port 3002');
});