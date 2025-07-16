import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBooks, reset } from '../features/book/bookSlice';
import { toast } from 'sonner';
import BookCard from '../components/BookCard';

const BookPage = () => {
  const { books, isLoading, isError, message } = useSelector(
    (state) => state.book,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (isError) toast.error(message);
    dispatch(getAllBooks());
    return () => dispatch(reset);
  }, [dispatch, isError, message]);

  console.log(books);

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
