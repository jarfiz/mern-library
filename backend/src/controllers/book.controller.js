import Book from '../models/book.model.js';
import User from '../models/user.model.js';

// req.user.id is get from authMiddleware, this is contain user model

export const getAllBook = async (req, res) => {
  const books = await Book.find({ user: req.user.id });
  res.status(200).json(books);
};

export const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    const user = await User.findById(req.user.id);

    if (!user) {
      res.status(401).json({ message: 'User is not found' });
    }

    if (!book) {
      return res.status(404).json({ message: 'Book is not found' });
    }

    if (book.user.toString() !== user.id) {
      res
        .status(403)
        .json({ message: 'User is not authorize to get this book' });
    }

    res.status(200).json(book);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const createBook = async (req, res) => {
  const { title, author, description, year, publisher, image } = req.body;

  try {
    const newBook = await Book.create({
      title,
      author,
      description,
      year,
      publisher,
      image,
      user: req.user.id,
    });

    res.status(201).json(newBook);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const updateBook = async (req, res) => {
  const { title, author, description, year, publisher, image } = req.body;

  try {
    const book = await Book.findById(req.params.id);
    const user = await User.findById(req.user.id);

    if (!book) {
      res.status(404).json({ message: 'Book is not found' });
    }

    if (book.user.toString() !== user.id) {
      res
        .status(401)
        .json({ message: 'User is not authorize to update this book' });
    }

    const updateBook = await Book.findByIdAndUpdate(
      req.params.id,
      {
        title,
        author,
        description,
        year,
        publisher,
        image
      },
      { new: true },
    );

    res.status(200).json(updateBook);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    const user = await User.findById(req.user.id);

    if (!book) {
      return res.status(404).json({ message: 'Book is not found' });
    }

    if (book.user.toString() !== user.id) {
      res
        .status(403)
        .json({ message: 'User is not authorize to delete this book' });
    }

    await book.deleteOne();

    res.status(200).json(book);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
