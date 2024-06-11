import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookCard from './BookCard';
import '../css/Book.css';

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/book/books')
      .then(res => {
        setBooks(res.data);
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className='book-list container'>
      {books.map(book => (
        <div className="row">
          <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <BookCard key={book._id} book={book} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Books;
