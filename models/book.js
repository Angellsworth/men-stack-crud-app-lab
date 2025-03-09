// # Defines the Book schema for MongoDB (title, author, genre, etc.)

const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    genre: String,
    isRead: { type: Boolean, default: false },
    submittedBy: { type: String, required: true }
});

const Book = mongoose.model('Book', bookSchema)

module.exports = Book;

