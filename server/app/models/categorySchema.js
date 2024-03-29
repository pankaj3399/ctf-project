// create a category schema for CTF challenges
import mongoose from 'mongoose';
import Challanges from './challangesSchema.js';

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Category name is required'],
        unique: true,
    },
    description: {
        type: String,
    }

}, { timestamps: true });

categorySchema.virtual('challenges', {
    ref: "Challanges",
    localField: '_id',
    foreignField: 'category'
});

const Category = mongoose.model('Category', categorySchema);

export default Category;