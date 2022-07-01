import React from 'react';
import CustomerAppDateTime from '../components/customerAppDateTime.jsx';
import BookDetails from '../components/BookDetails.jsx';
import CreateReviewWrittenBits from '../components/createReviewWrittenBits.jsx';

const ReviewEntryContainer = (props) => {

  return (
    <div className='agentScreen mx-5'>
      <div className='row'>
        <div className='col-md-12'>
          <div className='d-flex flex-column'>
            <div className='customerDetails'>
              <BookDetails  />
              {/* <BookDetails customerDetail={customerDetail} /> */}
            </div>

            <div className='customerAppDateTime'>
              <CustomerAppDateTime  />
              {/* <CustomerAppDateTime customerDetail={customerDetail} /> */}
            </div>

            <div className='customerNotes'>
              <CreateReviewWrittenBits  />
              {/* <CreateReviewWrittenBits customerNotes={customerNotes} /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewEntryContainer;