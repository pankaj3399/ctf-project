// create a model of user submissions for all the challenges

import mongoose from 'mongoose';

const userAttemptsSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    challenge: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Challenge',
        required: true
    },
    submission: {
        type: String,
        required: true
    },
    isCorrect: {
        type: Boolean,
        default: false
    },
    points: {
        type: Number,
        default: 0
    }
}, { timestamps: true });

const UserAttempts = mongoose.model('UserAttempts', userAttemptsSchema);

export default UserAttempts;
