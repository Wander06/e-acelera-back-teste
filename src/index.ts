import express from 'express'
import { PrismaClient } from '@prisma/client'

const prismaClient = new PrismaClient()

const app = express()
const port = process.env.PORT ?? 5002

app.get('/', async (req, res) => {
    const books = await prismaClient.user.findMany()

    res.json('Welcome to the homepage');
});

app.get('/user', (req, res) => {
    res.send('User page');
});

app.get('/login', (req, res) => {
    res.send('Login page');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
