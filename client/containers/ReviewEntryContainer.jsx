// import {useDispatch, useSelector} from 'react-redux';
// import { loadTicket } from '../actions/actions.js';
import React from 'react';
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
