// /app.js

// Imports the express module
const express = require('express');

// Creates a new Express application
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Initial books array
let books = [
  // { id: 1, title: "The Hobbit", author: "J. R. R. Tolkien" },
  // { id: 2, title: "A Song of Ice and Fire, Book 1", author: "George R. R. Martin" }
];

// Simple routing to handle get requests
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Create Operation: Add a new book with POST
app.post('/books', (req, res) => {
  const { title, author } = req.body;
  if (!title || !author) {
    return res.status(400).json({ message: 'Title and author are required' });
  }
  const newBook = {
    id: books.length + 1,
    title,
    author
  };
  books.push(newBook);
  res.status(201).json(newBook);
});


// Read Operation: Get all books
app.get('/books', (req, res) => {
  res.json(books);
});

// Read Operation: Get a single book by ID
app.get('/books/:id', (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id, 10));
  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});

// Update Operation: Modify an existing book by ID
app.put('/books/:id', (req, res) => {
  const bookIndex = books.findIndex(b => b.id === parseInt(req.params.id, 10));
  if (bookIndex === -1) {
    return res.status(404).json({ message: 'Book not found' });
  }
  const { title, author } = req.body;
  if (!title && !author) {
    return res.status(400).json({ message: 'At least one of title or author is required' });
  }
  const updatedBook = { ...books[bookIndex], ...req.body };
  books[bookIndex] = updatedBook;
  res.json(updatedBook);
});

// Delete Operation: Remove a book by ID
app.delete('/books/:id', (req, res) => {
  const bookIndex = books.findIndex(b => b.id === parseInt(req.params.id, 10));
  if (bookIndex === -1) {
    return res.status(404).json({ message: 'Book not found' });
  }
  const deletedBook = books.splice(bookIndex, 1);
  res.json(deletedBook[0]);
});

// Error handling middleware for unknown routes
app.use((req, res, next) => {
  res.status(404).json({ message: 'Not found' });
});

// Server port and console log to display port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});