import React, { useEffect, useState } from 'react';
import BookCard from '../components/BookCard.jsx';
import '../styles/bookcard.scss';

function BookContainer(props) {
  const [bookinfo, setBookinfo] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/books')
      .then(res => res.json())
      .then((bookdetails) => {setBookinfo([...bookdetails]) })
  }, []);
  
  const cards = [];
  if (bookinfo) {
    for (let i = 0; i < bookinfo.length; i++) {
      cards.push(<BookCard bookinfo={bookinfo[i]} />);
    }
  }

  return (
    // <div className="container d-flex flex-wrap border-primary shadow" >
    <div id="bookcontainer" className="container border-primary shadow" >
      {cards}
    </div>
   )
}

export default BookContainer;