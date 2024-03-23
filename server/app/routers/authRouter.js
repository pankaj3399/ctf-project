import express from 'express'
const router = express.Router();

import signin from '../controllers/auth/signin.js';
import signup from '../controllers/auth/signup.js';
import profile from '../controllers/auth/profile.js';

import auth from '../middleware/auth.js';
import verifyOtp from '../controllers/auth/verifyOtp.js';

//routes
router.get('/profile', auth(), profile);
router.post('/login', signin);
router.post('/signup', signup);
router.post('/verify-otp', verifyOtp);

export default router;