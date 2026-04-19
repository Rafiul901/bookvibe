import React, { Suspense } from 'react';
import Book from './Book';

const Books = ({data}) => {
    return (
     <div>
           <div className='grid grid-cols-1 md:grid-cols-3 gap-6 m-10'>
            <Suspense fallback={<span>loading.....</span>}>
            {
                data.map(book=><Book key={book.bookId} book={book}></Book>)
            }
            </Suspense>
        </div>
     </div>
    );
};

export default Books;