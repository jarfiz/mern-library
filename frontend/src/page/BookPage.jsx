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
    return () => dispatch(reset);
  }, [dispatch, isError, message, navigate, user]);


  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div className='mt-20 grid grid-cols-4 gap-8'>
          {books.map((book) => (
            <BookCard key={book._id} book={book} />
          ))}
        </div>
      )}
    </>
  );
};

export default BookPage;
