import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Welcome to the homepage');
});

router.get('/user', (req, res) => {
    res.send('User page');
});

router.get('/login', (req, res) => {
    res.send('Login page');
});

export default router;
