import express from 'express';

import { getProducts, getProduct, createProduct } from '../controllers/products.js';

const router = express.Router();

router.get('/', getProducts);

router.post('/', createProduct);

router.get('/:id', getProduct);

export default router;
