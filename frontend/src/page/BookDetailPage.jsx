import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBook, getBookById, reset } from '../features/book/bookSlice';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const BookDetailPage = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { books } = useSelector((state) => state.book);
  const id = location.pathname.split('/')[2];

  const { title, image, description, author } = books;

  const handleDelete = () => {
    dispatch(deleteBook(id));
    toast.success('Book deleted');
    navigate('/books');
  };

  useEffect(() => {
    dispatch(getBookById(id));

    return () => dispatch(reset());
  }, [dispatch, id]);

  return (
    <div className='relative mt-20 flex gap-6 p-4 outline'>
      <img src={image} alt={`${title} image`} width={500} />
      <div className='space-y-4'>
        <h1 className='mt-10 text-3xl font-bold'>{title}</h1>
        <p className='text-lg'>{description}</p>

        <p className='text-xl font-medium'>{author}</p>
        <div className='absolute right-10 bottom-4 flex gap-4'>
          <button
            onClick={handleDelete}
            className='rounded bg-red-500 px-4 py-2 text-white transition hover:bg-red-600'
          >
            Delete
          </button>
          <button className='rounded bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-600'>
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetailPage;
