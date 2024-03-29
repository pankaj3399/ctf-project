import express from 'express'
const router = express.Router();

import signin from '../controllers/auth/signin.js';
import signup from '../controllers/auth/signup.js';
import profile from '../controllers/auth/profile.js';

import auth from '../middleware/auth.js';
import verifyOtp from '../controllers/auth/verifyOtp.js';
import resendOtp from '../controllers/auth/resendOtp.js';
import checkVerification from '../controllers/auth/checkVerification.js';

//routes
router.get('/profile', auth(), profile);
router.post('/login', signin);
router.post('/signup', signup);
router.post('/verify-otp', verifyOtp);
router.post('/resend-otp', resendOtp);
router.post('/check-verification', checkVerification);

export default router;