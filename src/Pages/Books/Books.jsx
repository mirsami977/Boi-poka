
import React,{Suspense, useEffect ,useState} from 'react';
const Book = React.lazy(() => import('./Book'));
const Books =({data}) => {
    const [ allBooks , setAllBooks] =useState([]);
    return (
        <div>
           <h1 className='text-3xl text-center p-6 '> books</h1> 

           <Suspense fallback={<span>loadig............</span>}>
           <div className=' grid grid-cols- md:grid-cols-2 lg:grid-cols-3 gap-5'>
           {
           data.map((singleBook)=><Book key={singleBook.bookId} singleBook={singleBook}></Book>)
           } 
           </div>
           </Suspense>
        </div>
    );
};

export default Books;