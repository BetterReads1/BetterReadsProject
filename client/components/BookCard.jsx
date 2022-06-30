import React from 'react';
import styles from '../_custom.scss'

const BookCard = (props) => {



  
  return (
   
    
    <div id='book-card' className='container col-md-3 border shadow border-info'>
      <img src="/./books.jpeg"></img>
     
      
      <div className = "card-body card-title text-center pt-2">
        <strong>Title by Author</strong>
        </div>
       
        
      <div className ="row">
      <div className ="align-items-center col-md-6 text-end  border"><strong>Genre:</strong></div>
      <div class = "best-value" className = "border best-value col-md-6 text-start ">Horror</div>
      
      </div>
      <div className ="row">
      <div className ="align-items-center col-md-6 text-end  border"><strong>Pages:</strong></div>
      <div class = "best-value" className = "border best-value col-md-6 text-start ">397</div>
      </div>
      <div className ="row align-middle">
      <div className ="align-items-center col-md-6 text-end  border"><strong>Year Published:</strong></div>
      <div class = "best-value" className = "border d-flex align-items-center best-value col-md-6 text-start  border">1977</div>
      </div>
      <div className ="d-flex row align-middle">
      <div className ="w-100"></div>
      <div className ="align-items-center col-md-6 text-end border"><strong>Part of Series:</strong></div>
      <div class = "best-value" className = "border d-flex align-items-center best-value col-md-6 text-start ">Harry Potter and the Order of the Phoenix</div>
      </div>
      <div className ="row align-middle">
      <div className ="align-items-center col-md-6 text-end border"><strong>Series Name: </strong></div>
      <div class = "best-value" className = "border d-flex align-items-center best-value col-md-6 text-start ">Harry Potter</div>
      </div>
      <div className ="row align-middle">
      <div className ="align-items-center col-md-6 text-end border"><strong>Place in Series:</strong></div>
      <div class = "best-value" className = "border d-flex align-items-center best-value col-md-6 text-start ">5</div>
      </div>
      <div className ="row align-middle">
      <div className ="align-items-center col-md-6 text-end border"><strong>Rating:</strong></div>
      <div class = "best-value" className = "border d-flex align-items-center best-value col-md-6 text-start ">4 stars</div>
      </div>
      <div className ="card-body">
      <p className="card-text">Fantastic book. I was on the edge of my seat the entire time. I can't believe Harry Potter defeated Gandalf to become a Sith Lord.</p>
      </div>
      
      
      </div>
)};

export default BookCard;