import express from 'express';
import { verifyToken } from './middleware/auth';

const app = express();
app.use(express.json());

app.get('/dashboard', verifyToken, (req, res) => {
    // Aggregate data from different services and send response
    res.json({ message: 'Dashboard data' });
});

app.listen(3009, () => {
    console.log('Dashboard and Reporting service running on port 3009');
});