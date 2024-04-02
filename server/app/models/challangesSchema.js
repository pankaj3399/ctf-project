// Create Challanges Schema for CTF challenges

import mongoose from 'mongoose';
import User from './userSchema.js';
import UserAttempts from './userAttemps.js';

const challangesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required']
    },
    description: {
        type: String,
        required: [true, 'Description is required']
    },
    points: {
        type: Number,
        required: [true, 'Points are required']
    },
    solution: {
        type: String,
        required: [true, 'Flag is required']
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: [true, 'Category is required']
    },
    image:{
        type: String,
        required: false

    },
    createdBy:{
        type: String,
        enum : ['admin','user'],
        required: [true, 'Created By is required'],
        default: 'admin'
    },
    author: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    status:{
        type: String,
        enum : ['published','pending','rejected'],
        required: [true, 'Status is required'],
    },
    
}, { timestamps: true });

// before saving the challenge check if the author is admin or not and if not then check if the user solved all the challenges created by admin or not
challangesSchema.pre('save', async function (next) {
    if(this.createdBy === 'user'){
    
        const user = await User.findById(this.author);

        const totalAdminChallenges = await Challanges.find({createdBy: 'admin',status:'published'}).countDocuments();

        const solvedChallenges = await UserAttempts.find({user: user, isCorrect: true}).populate({
            path: 'challenge',
            match: {createdBy: 'admin',status:'published'}

        }).countDocuments();

        const isAllSolved = solvedChallenges >= totalAdminChallenges ? true : false;
        if(!isAllSolved){
            throw new Error('You need to solve all the challenges created by admin to create a challenge');
        }
    }
    next();
});

        
const Challanges = mongoose.model('Challanges', challangesSchema);

export default Challanges;
