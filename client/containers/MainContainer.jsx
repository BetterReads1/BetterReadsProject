import React, {useEffect, useState} from 'react';
import BookContainer from './BookContainer.jsx';
import ReviewEntryContainer from './ReviewEntryContainer.jsx';

const MainContainer = () => {
  /*
! ==================================================
!   This is why/where everything is presented in a 
!   single column.
! ==================================================
*/

  // Formatting for components:
  // <BookContaIner />
  // Inside book container, render a <BookCard />.
  const [bookinfo, setBookinfo] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/ratings')
      .then((res) => res.json())
      .then((bookdetails) => {
        setBookinfo([...bookdetails]);
      });
  }, []);

  return (
    <div id='container border border-3 rounded-3 mt-2 p-2 border-info shadow'>
      <ReviewEntryContainer setbooks={setBookinfo} books={bookinfo}/>
      <div>
        <div className='container h-5'>
          <br></br>
          <br></br>
        </div>
      </div>
      <BookContainer bookinfo={bookinfo} />
    </div>
  );
};

export default MainContainer;
