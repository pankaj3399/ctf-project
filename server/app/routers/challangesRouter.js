import express from 'express'
const router = express.Router();

import { getAllChallenges } from '../controllers/challenges/challenges.js';
//routes
// ENDPOINT: /api/v1/challenges/

router.get('/', getAllChallenges);
// router.get('/:id', getCategoryDetailsById);


export default router;