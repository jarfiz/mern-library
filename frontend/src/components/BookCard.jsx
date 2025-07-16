import { Link } from 'react-router-dom';

const BookCard = ({ book }) => {
  return (
    <Link to={`/books/${book._id}`} key={book._id} className='space-y-4'>
      <img src={book.image} alt={`${book.title} image`} />
      <div className='space-y-2'>
        <h1 className='text-xl font-bold'>{book.title}</h1>
        <p className='line-clamp-5'>{book.description}</p>
        <p className='text-lg font-medium'>{book.author}</p>
      </div>
    </Link>
  );
};

export default BookCard;
