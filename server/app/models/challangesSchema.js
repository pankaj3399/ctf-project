// Create Challanges Schema for CTF challenges

import mongoose from 'mongoose';

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
    author: {
        type: String,
        required: [true, 'Author is required']
    },
    
}, { timestamps: true });

const Challanges = mongoose.model('Challanges', challangesSchema);

export default Challanges;
