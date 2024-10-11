import express from 'express'

const app = express();
const port = process.env.PORT ?? 5002;

app.get('/', (req, res) => {
    res.send('Welcome to the homepage');
});

app.get('/user', (req, res) => {
    res.send('User page');
});

app.get('/login', (req, res) => {
    res.send('Login page');
});

export default app;
