import React from 'react';
import styles from '../_custom.scss';
// import '../styles/bookcard.scss';

const BookCard = (bookinfo) => {

  console.log(bookinfo);
    // Expected Value
  const { 
    genre, 
    pages, 
    year, 
    part_of_series, 
    series_names, 
    place_in_series, 
    overall_enjoyability, 
    tags, 
    comment,
  } = bookinfo.bookinfo;

  // const { 
  //   author, 
  //   book_id, 
  //   genre_id, 
  //   pages, 
  //   place_in_series, 
  //   series, 
  //   series_name,
  //   title, 
  //   year
  // } = bookinfo.bookinfo;

  return (
    <div className='book-card container col-md-3 border shadow border-info'>
      <div className = "card-body card-title text-center pt-2">
        <strong>{title}</strong> by <strong>{author}</strong>
      </div>
      
      <div className ="row">
        <div className ="align-items-center col-md-6 text-end border"><strong>Rating</strong></div>
        <div className = "border d-flex align-items-center best-value col-md-6 text-start ">{overall_enjoyability}</div>
      </div>
      
      <div className ="row">
        <div className ="align-items-center col-md-6 text-end border"><strong>Genre</strong></div>
        <div className = "border best-value col-md-6 text-start">{genre}</div>
      </div>

      <div className ="row">
        <div className ="align-items-center col-md-6 text-end border"><strong>Pages</strong></div>
        <div className = "border best-value col-md-6 text-start">{pages}</div>
      </div>

      <div className ="row">
        <div className ="align-items-center col-md-6 text-end  border"><strong>Year</strong></div>
        <div className = "border d-flex align-items-center best-value col-md-6 text-start  border">{year}</div>
      </div>

      <div className ="row">
        <div className ="w-100"></div>
        <div className ="align-items-center col-md-6 text-end border"><strong>Part of Series</strong></div>
        <div className = "border d-flex align-items-center best-value col-md-6 text-start ">{series ? 'Yes' : 'No'}</div>
      </div>

      <div className ="row">
        <div className ="align-items-center col-md-6 text-end border"><strong>Series </strong></div>
        <div className = "border d-flex align-items-center best-value col-md-6 text-start ">{series_name}</div>
      </div>

      <div className ="row">
        <div className ="align-items-center col-md-6 text-end border"><strong>Place in series </strong></div>
        <div className = "border d-flex align-items-center best-value col-md-6 text-start "> {place_in_series}</div>
      </div>

      <div className ="row">
        <div className ="align-items-center col-md-12 text-center border">
          {/* <strong>tag1, tag2, tag3</strong> */}
          <strong>{tags[0]}, {tags[1]}, {tags[2]}</strong>
        </div>
      </div>
      
      <div className ="card-body">
        {/* <p className="card-text">Fantastic book. I was on the edge of my seat the entire time. I can't believe Harry Potter defeated Gandalf to become a Sith Lord.</p> */}
        <p className="card-text">{comment}</p>
      </div>

    </div>
)};

export default BookCard;