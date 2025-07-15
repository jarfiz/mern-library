import Book from '../models/book.model.js';

export const getAllBook = async (req, res) => {
  const books = await Book.find();
  res.status(200).json(books);
};

export const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: 'Book is not found' });
    }

    res.status(200).json(book);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const createBook = async (req, res) => {
  const { title, author, description, year, publisher } = req.body;

  try {
    const newBook = await Book.create({
      title,
      author,
      description,
      year,
      publisher,
    });

    res.status(201).json(newBook);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const updateBook = async (req, res) => {
  const { title, author, description, year, publisher } = req.body;

  try {
    const book = await Book.findByIdAndUpdate(
      req.params.id,
      {
        title,
        author,
        description,
        year,
        publisher,
      },
      { new: true },
    );

    res.status(200).json(book);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);

    if (!book) {
      return res.status(404).json({ message: 'Book is not found' });
    }

    res.status(200).json(book);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
