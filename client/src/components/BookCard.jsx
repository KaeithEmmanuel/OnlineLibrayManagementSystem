import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const BookCard = ({ book }) => {
  const { name, author, imageUrl, _id } = book;

  return (
    <div className='book-card'>
      <img src={imageUrl} alt={name} className='book-image' />
      <div className="book-details">
        <h3>{name}</h3>
        <p>{author}</p>
      </div>
      <div className="book-actions">
        <button ><Link to={`/book/${book._id}`} className="btn-link">Edit</Link></button>
        <button ><Link to={`/delete/${book._id}`} className="btn-link">Delete</Link></button> 
      </div>
    </div>
  );
};

export default BookCard;
