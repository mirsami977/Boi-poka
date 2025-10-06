
import React, { use } from 'react';
import { IoIosStarHalf } from "react-icons/io";
const Book = ({ singleBook }) => {
    const { bookName, author,bookId, image, review, rating, category } = singleBook;
    return (
        <Link to={`/bookDetails/${bookId}`}>
            <div className="card bg-base-100 w-96 shadow-sm border p-5">
                <figure className='p-4 bg-gray-100 w-2/3 mx-auto'>
                    <img className='h-[166px]'
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {bookName}
                        <div className="badge badge-secondary">{author}</div>
                    </h2>
                    <p>{review}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">{category}</div>
                        <div className="badge badge-outline">{rating}<IoIosStarHalf /></div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;