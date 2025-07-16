import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBooks, reset } from '../features/book/bookSlice';
import { toast } from 'sonner';
import BookCard from '../components/BookCard';
import { useNavigate } from 'react-router-dom';

const BookPage = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const { books, isLoading, isError, message } = useSelector(
    (state) => state.book,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (isError) toast.error(message);
    if (!user) navigate('/login');
    dispatch(getAllBooks());
    return () => dispatch(reset());
  }, [dispatch, isError, message, navigate, user]);

  if (isLoading) return <h1>loading</h1>;

  return (
    <>
      {books.length === 0 && (
        <div className='grid min-h-screen place-items-center'>
          <div className='space-y-4 text-center'>
            <h1 className='text-4xl font-medium'>Book is empty!</h1>
            <button
              onClick={() => navigate('/books/new')}
              className='cursor-pointer rounded-md bg-slate-800 px-4 py-2 text-slate-50 hover:bg-slate-700'
            >
              Add book
            </button>
          </div>
        </div>
      )}

      <div className='mt-20 grid grid-cols-4 gap-8'>
        {Array.isArray(books) &&
          books.map((book) => <BookCard key={book._id} book={book} />)}
      </div>
    </>
  );
};

export default BookPage;
