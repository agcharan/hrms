import express from 'express';
import { verifyToken } from './middleware/auth';

const app = express();
app.use(express.json());

const clients = [];
const vendors = [];

app.post('/clients', verifyToken, (req, res) => {
    const client = req.body;
    clients.push(client);
    res.status(201).send('Client added');
});

app.post('/vendors', verifyToken, (req, res) => {
    const vendor = req.body;
    vendors.push(vendor);
    res.status(201).send('Vendor added');
});

app.get('/clients', verifyToken, (req, res) => {
    res.json(clients);
});

app.get('/vendors', verifyToken, (req, res) => {
    res.json(vendors);
});

app.listen(3001, () => {
    console.log('Client and Vendor service running on port 3001');
});