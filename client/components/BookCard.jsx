import React from 'react';

const BookCard = (props) => {




  const SingleBookCard = (
    <div id='book-card' className='border shadow border-info'>
      <h3>My Fancy Book Title</h3>
      by
      <h5>Me myself and Irene</h5>
    </div>
  );

  return (
    // <div>
    // <SingleBookCard />
    // </div>
    <div id='book-card' className='border shadow border-info'>
      <div className="container border border-3 rounded-3 mt-2 p-2 border-info shadow">My Fancy Book Title</div>
      by
      <span className="card border border-3 rounded-3 m-20 p-25 border-warning shadow">Me myself and Irene</span>
    </div>
)};

export default BookCard;