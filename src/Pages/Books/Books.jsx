
import React,{Suspense, useEffect,useState} from 'react';
const Books =({data}) => {
    const [allBooks,setAllBooks] =useState([]);
    return (
        <div>
           <h1 className='text-3xl text-center p-6 '> books</h1> 

           <Suspense fallback={<span>loadig............</span>}>
           {
           data.map((singleBook)=><Book key={singleBook.bookId} singleBook={singleBook}></Book>)
           }
           </Suspense>
        </div>
    );
};

export default Books;