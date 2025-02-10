import express from 'express';
import { verifyToken } from './middleware/auth';

const app = express();
app.use(express.json());

const attendances = [];

app.post('/attendance', verifyToken, (req, res) => {
    const attendance = req.body;
    attendances.push(attendance);
    res.status(201).send('Attendance recorded');
});

app.get('/attendance', verifyToken, (req, res) => {
    res.json(attendances);
});

app.listen(3005, () => {
    console.log('Time Clock & Attendance service running on port 3005');
});