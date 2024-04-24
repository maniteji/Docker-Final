const express = require('express');
const app = express();

app.get('/api/books', (req, res) => {
  res.json({ books: ['Book 1', 'Book 2', 'Book 3'] });
});

app.get('/api/books/:id', (req, res) => {
  const bookId = req.params.id;
  res.json({ book: `Book ${bookId}` });
});

app.get('/api/stats', (req, res) => {
  res.json({ books: ['Book 1', 'Book 2', 'Book 3'] });
});

app.get('/api/books/:id', (req, res) => {
  const bookId = req.params.id;
  res.json({ book: `Book ${bookId}` });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
