/**
 * ************************************
 *
 * @module  CustomerDetail
 * @author
 * @date
 * @description presentation component that renders a single box for each CustomerDetail
 *
 * ************************************
 */
import React from 'react';
 import { useDispatch} from 'react-redux'


const CustomerDetail = (props) => {
// class CustomerDetail extends Component {


const handleIncrement = (product) => {
    console.log(product);
    // this.setState({count: this.state.count + 1});
  };

const  connectToDB = () => {

    fetch('http://localhost:3004/expense')
      .then(response => response.json())
      // .then(data => {this.setState({expenses: [...this.state.expenses, JSON.stringify(data)]})})
      .then(data => {
        console.log('🔴🟠🟡🟢🔵🟣 | file: counter.jsx | line 72 | Counter | //handleIncrement | data', data);
      });
    
      // this.setState({count: this.state.count + 5});
  };


  // useDispatch()
  // const dispatch = useDispatch();
  // dispatch({ type: 'info', payload: 'if applicable'})

  return (
    <div className='container  border border-3 rounded-3 mt-2 p-2 border-info shadow'>

      <div className="container">

      <div className='row'>
        <div className='col-md-6'>
          <label htmlFor='inputFirst'>First</label>
          <input type='text' className='form-control shadow h-50 border border-primary bg-info bg-opacity-10' id='inputFirst' defaultValue={props.customerDetail.first_name}></input>
        </div>
        <div className='col-md-6'>
          <label htmlFor='inputLast'>Last</label>
          <input type='text' className='form-control shadow h-50 border border-primary bg-info bg-opacity-10' id='inputLast' defaultValue={props.customerDetail.last_name}></input>
        </div>
        </div>
        {/* <span className='shadow border border-info px-3 py-1 m-50 btn-light rounded-3 bg-info bg-opacity-10 '>Howdy!</span>
        <p className='border border-3 rounded-3 mt-2 px-2 border-info'>Howdy!</p> */}
      <div className='row'>
        <div className='col-md-12'>
          <label htmlFor='inputAddress'>Address</label>
          <input type='text' className='form-control shadow h-50 border border-primary bg-info bg-opacity-10' id='inputAddress' defaultValue={props.customerDetail.street_address}></input>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-6'>
          <label htmlFor='inputCity'>City</label>
          <input type='text' className='form-control shadow h-50 border border-primary bg-info bg-opacity-10' id='inputCity' defaultValue={props.customerDetail.city}></input>
        </div>
        <div className='col-md-2'>
          <label htmlFor='inputState'>State</label>
          <input type='text' className='form-control shadow h-50 border border-primary bg-info bg-opacity-10' id='inputState' defaultValue={props.customerDetail.state}></input>
        </div>
        <div className='col-md-4'>
          <label htmlFor='inputZip'>Zip</label>
          <input type='text' className='form-control shadow h-50 border border-primary bg-info bg-opacity-10' id='inputZip' defaultValue={props.customerDetail.zip_code}></input>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-6'>
          <label htmlFor='inputPhone'>Phone</label>
          <input type='text' className='form-control shadow h-50 border border-primary bg-info bg-opacity-10' id='inputPhone' defaultValue={props.customerDetail.phone}></input>
        </div>
        <div className='col-md-6'>
          <label htmlFor='inputEmail'>Email</label>
          <input type='text' className='form-control shadow h-50 border border-primary bg-info bg-opacity-10' id='inputEmail' defaultValue={props.customerDetail.email}></input>
        </div>
      </div>
      </div>
      </div>
  );
}

export default CustomerDetail;
 