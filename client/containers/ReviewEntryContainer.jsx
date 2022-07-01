// import {useDispatch, useSelector} from 'react-redux';
// import { loadTicket } from '../actions/actions.js';
import React, {useEffect, useState} from 'react';
import CustomerAppDateTime from '../components/customerAppDateTime.jsx';
import BookDetails from '../components/BookDetails.jsx';
// import TicketNotes from '../components/customerNotes.jsx';
import CreateReviewWrittenBits from '../components/createReviewWrittenBits.jsx';
// import { TicketNote } from '../components/';

// function mapStateToProps(state) {
//   return {
//     customerDetail: state.customer.customerDetail,
//     customerNotes: state.customer
//   }
// }

// const mapStateToProps = ({state}) => ({
// customerDetail: state.customerDetail
//});

// const mapStateToProps = state => ({
// })

const ReviewEntryContainer = (props) => {
  // const dispatch = useDispatch();
  // const customerDetail = useSelector((state) => state.customer.customerDetail);
  // const customerNotes = useSelector((state) => state.customer);

  // fetch('/getTickets' + window.location.pathname)
  //   .then((data) => data.json())
  //   .then((data) => loadTicket([window.location.pathname, data]))
  //   .catch((error) => console.log(error));

  //   componentDidMount() {

  // }

  //render() {
/*
* ==================================================
*   Function to Read the current values in the form
* ==================================================
*/
  
  let myLivingContent = "";
function getReviewDets() {
  let daDeets = {}
  daDeets.title = document.getElementById('bookTitle').value;
  daDeets.author = document.getElementById('inputLast').value + ", " + document.getElementById('inputFirst').value;
  daDeets.pages = document.getElementById('inputPages').value;
  daDeets.year = Number(document.getElementById('inputYear').value);
  daDeets.genre = document.getElementById('selectGenre').value;
  daDeets.series_name = document.getElementById('partOfSeries').value;
  daDeets.series_name = document.getElementById('seriesName').value;
  daDeets.place_in_series = Number(document.getElementById('seriesNum').value);

  let reviewDeets = {}
  reviewDeets.user_id = 0;
  reviewDeets.comments = document.getElementById('editcon').children[1].children[0].innerHTML;
  reviewDeets.overall_enjoyability = 5;
  reviewDeets.tags = ['good','bad', 'ugly'];

  const myPostBody = [daDeets, reviewDeets]
  console.log('🔴🟠🟡🟢🔵🟣 | file: ReviewEntryContainer.jsx | line 64 | getReviewDets | myPostBody', myPostBody);

  
  
  // useEffect(() => {
    fetch('http://localhost:3000/newRating', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(myPostBody)
})
      .then(response => response.json())
      .then(data => {
      console.log('🔴🟠🟡🟢🔵🟣 | file: ReviewEntryContainer.jsx | line 80 | useEffect | data', data);
        return data;  
      })
      .then(data => { setBookGenres([...data]) });
  
  return daDeets;
}

  //console.log('🔴🟠🟡🟢🔵🟣 | file: ReviewEntryContainer.jsx | line 24 | ReviewEntryContainer | render | this.props.customerDetail', this);
  return (
    <div className='agentScreen mx-5'>
      <div className='row'>
                    <div className='col-md-12'>
                            <div className='d-flex flex-column'>
                              <div className='customerDetails'>
                                <BookDetails  />
                                {/* <BookDetails customerDetail={customerDetail} /> */}
                              </div>


                              <div className='customerNotes'>
                                <CreateReviewWrittenBits  daContent={myLivingContent}/>
                                {/* <CreateReviewWrittenBits customerNotes={customerNotes} /> */}
            </div>

            <button onClick={() => {
              let reviewDeets = getReviewDets();
              console.log('🔴🟠🟡🟢🔵🟣 | file: ReviewEntryContainer.jsx | line 62 | //render | reviewDeets', reviewDeets);

            }} className='btn btn-primary mt-3 shadow col-3'>Submit My Review</button>
                            </div>
                    </div>

                    {/* <div className='col-md-6'>
                      <div className='ticketReason'>
                        <TicketReason customerNotes={customerNotes} />
                      </div>
                    </div> */}
      </div>
    </div>
  );
  //}
};

// export connect(mapStateToProps, null);
export default ReviewEntryContainer;
// export default ReviewEntryContainer;
