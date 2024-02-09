import { categories, info } from './shoe_list.js';

import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

console.log(info)

app.use(cors({
    origin: 'http://localhost:5173', // frontend localhost is allowed to access this api as of now, add your own localhost's PORT to use this api
    methods: ['GET']
}));


app.get('/api/shoes', (req, res) => {
    res.json(categories);
})

app.get('/api/info', (req, res) => {
    res.json(info);
})

app.listen(PORT , (req, res) => {
    console.log(`Server listening on PORT ${PORT}`);
})