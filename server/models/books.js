/*
    File Name: books.js
    Student Name: Jonathan Champ
    Student ID: 301230592
    Date: 2022-10-28
*/
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    name: String,
    author: String,
    published: String,
    description: String,
    price: String
}, {
    timestamps: true,
    collection: 'books'
});

export default mongoose.model('Books', BookSchema);