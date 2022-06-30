import React from 'react';

const BookCard = (props) => {





  return (
    <div id='book-card' className='border shadow border-info'>
      <div className="container border border-3 h-25 rounded-3 mt-2 p-4 border-info shadow">My Fancy Book Title</div>
      by
      <span className="card border border-3 rounded-3 m-20 p-25 border-warning shadow">Me myself and Irene</span>
    </div>
)};

export default BookCard;