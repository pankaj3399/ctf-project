import express from 'express'
const router = express.Router();

import { createChallengeByUser, getAllChallenges, getUserRankings, submitChallenge } from '../controllers/challenges/challenges.js';
import auth from '../middleware/auth.js';
//routes
// ENDPOINT: /api/v1/challenges/

router.get('/', getAllChallenges);
router.post('/',auth(),createChallengeByUser)
router.post('/submit/:id',auth(), submitChallenge);
router.get('/rankings',auth(), getUserRankings);
// get.get('/:id', getCategoryDetailsById);


export default router;