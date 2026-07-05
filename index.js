import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import usersRoutes from './routes/users.js';
import productsRoutes from './routes/products.js';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.use('/users', usersRoutes);
app.use('/products', productsRoutes);

app.get('/', (req, res) => res.send('Hello im joe barandon and welcome to my API'));

app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`));
