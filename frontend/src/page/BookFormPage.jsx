import { useState } from 'react';
import Input from '../components/Input';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createBook } from '../features/book/bookSlice';

const BookFormPage = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    image: '',
    description: '',
    year: '',
    publisher: '',
  });
  const { title, author, image, description, year, publisher } = formData;
  console.log({ title, author, image, description, year, publisher });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = { title, author, image, description, year, publisher };
    dispatch(createBook(book));
    navigate('/books');
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className='mt-20'>
      <h1 className='mb-10 text-center text-2xl font-medium'>
        Enter the book information
      </h1>
      {/* title, author, image, description, year, publisher */}
      <form onSubmit={handleSubmit} className='mx-auto w-5/12 space-y-2'>
        <Input
          label='title'
          placeholder='Book title'
          value={title}
          onChange={handleChange}
        />
        <Input
          label='image'
          placeholder='Book image url'
          value={image}
          onChange={handleChange}
        />
        <Input
          label='description'
          placeholder='Book description'
          value={description}
          onChange={handleChange}
        />
        <Input
          label='author'
          placeholder='Book author'
          value={author}
          onChange={handleChange}
        />
        <Input
          label='year'
          placeholder='Book year'
          value={year}
          onChange={handleChange}
        />
        <Input
          label='publisher'
          placeholder='Book publisher'
          value={publisher}
          onChange={handleChange}
        />
        <button
          type='submit'
          className='mt-3 w-full cursor-pointer rounded-md bg-slate-800 py-2 font-medium text-slate-50 outline hover:bg-slate-700'
        >
          Create book
        </button>
      </form>
    </div>
  );
};

export default BookFormPage;
