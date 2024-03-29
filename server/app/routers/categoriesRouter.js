import express from 'express'
import { getAllCategories, getCategoryDetailsById } from '../controllers/categories/categories.js';
const router = express.Router();


//routes
// ENDPOINT: /api/v1/categories

router.get('/', getAllCategories);
router.get('/:id', getCategoryDetailsById);


export default router;