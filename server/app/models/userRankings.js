import mongoose from "mongoose";


const userRankingsSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    points: {
        type: Number,
        default: 0
    }, 
    totalCorrectAttempts: {
        type: Number,
        default: 0
    }
}, { timestamps: true });


const UserRankings = mongoose.model('UserRankings', userRankingsSchema);

export default UserRankings;