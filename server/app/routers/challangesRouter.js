import express from 'express'
const router = express.Router();

import { getAllChallenges, getUserRankings, submitChallenge } from '../controllers/challenges/challenges.js';
import auth from '../middleware/auth.js';
//routes
// ENDPOINT: /api/v1/challenges/

router.get('/', getAllChallenges);
router.post('/submit/:id',auth(), submitChallenge);
router.get('/rankings',auth(), getUserRankings);
// get.get('/:id', getCategoryDetailsById);


export default router;