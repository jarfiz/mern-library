import { useEffect, useState } from 'react';
import Input from '../components/Input';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { getBookById, updatedBook } from '../features/book/bookSlice';

const UpdatePage = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { books } = useSelector((state) => state.book);

  const id = location.pathname.split('/')[3];
  console.log(books);

  const [formData, setFormData] = useState({
    title: '',
    author: '',
    image: '',
    description: '',
    year: '',
    publisher: '',
  });

  const { title, author, image, description, year, publisher } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = { title, author, image, description, year, publisher };
    dispatch(updatedBook({ id, book }));
    navigate('/books');
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    dispatch(getBookById(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (books) {
      setFormData({
        title: books.title ?? '',
        author: books.author || '',
        image: books.image || '',
        description: books.description || '',
        year: books.year || '',
        publisher: books.publisher || '',
      });
    }
  }, [books]);

  return (
    <div className='mt-20'>
      <h1 className='mb-10 text-center text-2xl font-medium'>
        Update book information
      </h1>
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
          Update book
        </button>
      </form>
    </div>
  );
};

export default UpdatePage;
