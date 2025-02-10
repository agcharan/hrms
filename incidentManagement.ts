import express from 'express';
import { verifyToken } from './middleware/auth';

const app = express();
app.use(express.json());

const incidents = [];

app.post('/incidents', verifyToken, (req, res) => {
    const incident = req.body;
    incidents.push(incident);
    res.status(201).send('Incident reported');
});

app.get('/incidents', verifyToken, (req, res) => {
    res.json(incidents);
});

app.listen(3006, () => {
    console.log('Incident Management service running on port 3006');
});