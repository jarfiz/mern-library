import { model, Schema } from 'mongoose';

const bookSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
    },
    author: {
      type: String,
      required: [true, 'Author is required'],
    },
    description: {
      type: String,
    },
    year: {
      type: Number,
      required: [true, 'Year is required'],
    },
    publisher: {
      type: String,
      required: [true, 'Publisher is required'],
    },
  },
  { timestamps: true },
);

const Book = model('Book', bookSchema);
export default Book;
