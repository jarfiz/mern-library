import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <div className='mt-20'>
      <div className='mx-auto max-w-9/12 space-y-6 text-center'>
        <div className='space-y-2'>
          <h1 className='text-center text-4xl font-bold'>
            Welcome to Book Library
          </h1>
          <p className=''>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error
            optio, unde recusandae fuga sunt corrupti soluta labore porro iure,
            nostrum autem aspernatur maiores distinctio fugit quae fugiat?
            Natus, harum accusamus. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Accusamus aliquid temporibus quos modi pariatur
            voluptate eveniet necessitatibus. Nam culpa beatae excepturi
            tempora, molestias veritatis esse non. Ipsum atque reprehenderit
            dignissimos?
          </p>
        </div>
        <div className='space-x-4'>
          <Link className='rounded-sm px-4 py-2 outline'>Get started</Link>
          <Link to='/register' className='rounded-sm px-4 py-2 outline'>
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
