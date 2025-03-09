//******  DEPENDENCIES ******
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const Book = require('./models/book.js');
const methodOverride = require('method-override');
const morgan = require('morgan');

const app = express();

dotenv.config();

//******  MONGODB CONNECTION  ******
mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
    console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

//******  MIDDLEWARE  ******
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(morgan('dev'));
app.use(express.static('public'))//static asset middleware- used to send static assets to the client (css, images, dom manipulation javascript)

//******  ROUTES  ******

// Landing Page
app.get('/', async (req, res) => {
    res.render("index.ejs");
});

// GET all books (Index)
app.get('/books', async (req, res) => {
    const allBooks = await Book.find({});
    res.render('books/index.ejs', { books: allBooks });
});

// GET form to create a new book
app.get('/books/new', (req, res) => {
    res.render('books/new.ejs');
});

// POST a new book (Create)
app.post('/books', async (req, res) => {
    req.body.isRead = req.body.isRead === 'on';
    await Book.create(req.body);
    res.redirect('/books');
});

// GET a single book by ID (Show)
app.get('/books/:bookId', async (req, res) => {
    try {
        const foundBook = await Book.findById(req.params.bookId);
        if (!foundBook) {
            return res.status(404).send("Book not found");
        }
        res.render('books/show.ejs', { book: foundBook });
    } catch (error) {
        console.error("Error finding book:", error);
        res.status(500).send("Error retrieving book details.");
    }
});

// GET the edit form for a book (Edit Form)
app.get('/books/:bookId/edit', async (req, res) => {
    try {
        const foundBook = await Book.findById(req.params.bookId);
        if (!foundBook) {
            return res.status(404).send("Book not found");
        }
        res.render("books/edit.ejs", { book: foundBook });
    } catch (error) {
        console.error("Error finding book:", error);
        res.status(500).send("Error retrieving book for editing.");
    }
});

// PUT (Update) - Update the book in MongoDB
app.put('/books/:bookId', async (req, res) => {
    req.body.isRead = req.body.isRead === 'on';
    await Book.findByIdAndUpdate(req.params.bookId, req.body);
    res.redirect(`/books/${req.params.bookId}`);
});

// DELETE - Remove a book from MongoDB
app.delete('/books/:bookId', async (req, res) => {
    try {
        await Book.findByIdAndDelete(req.params.bookId);
        console.log(`Successfully deleted book with ID: ${req.params.bookId}`);
        res.redirect("/books");
    } catch (error) {
        console.error(`Error deleting book: ${error.message}`);
        res.status(500).send("Internal Server Error: Could not delete book.");
    }
});

//****** START SERVER  ******
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});