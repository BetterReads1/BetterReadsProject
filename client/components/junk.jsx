/**
 * ************************************
 *
 * @module  BookDetails
 * @author
 * @date
 * @description presentation component that renders a single box for each BookDetail
 *
 * ************************************
 */
 import React, {useEffect, useState} from 'react';
 import { useDispatch} from 'react-redux'


// const BookDetails = (props) => {
const BookDetails = () => {

  
  const [bookGenres, setBookGenres] = useState([])
  const [bookDetails, setBookDetails] = useState(
    {
      genres: [],
      author: "J"
    })
  
  
  let props = {};
  props.bookDetail = {
    title: "Carrie",
    authorFirst: "Stephen",
    authorLast: "King",
    yearPublished: 1978,
    genre: 'Horror',
    partOfSeries: false,
    pages: 536,
    seriesName: ''
  }

  
  const handleIncrement = (product) => {
    console.log(product);
    // this.setState({count: this.state.count + 1});
  };


  useEffect(() => {
    fetch('http://localhost:3000/genre')
      .then(response => response.json())
      // .then(data => {this.setState({expenses: [...this.state.expenses, JSON.stringify(data)]})})
      .then(data => { setBookGenres([...data]) })
      .then(data => {
        console.log('🔴🟠🟡🟢🔵🟣 | file: counter.jsx | line 52 | Counter | useEffect | data', data);
      })
      .then(console.log('🔴🟠🟡🟢🔵🟣 | file: counter.jsx | line 55 | Counter | useEffect | bookGenres', bookGenres)
      );
      // .then(renderGenres());

  })

  // const  connectToDB = () => {

  //     fetch('http://localhost:3000/genre')
  //       .then(response => response.json())
  //       // .then(data => {this.setState({expenses: [...this.state.expenses, JSON.stringify(data)]})})
  //       .then(data => {
  //         console.log('🔴🟠🟡🟢🔵🟣 | file: counter.jsx | line 72 | Counter | //handleIncrement | data', data);
  //       });
    
  //       // this.setState({count: this.state.count + 5});
  //   };

  const renderGenres = [];
  if (bookGenres) {
    bookGenres.map((genre) => {
      console.log('🔴🟠🟡🟢🔵🟣 | file: BookDetails.jsx | line 74 | BookDetail | BookDetails | renderGenres', genre);
      renderGenres.push(<option value={genre}>{genre}</option>)
    }
    )
  } else {
    renderGenres.push(<p>There are no genres.</p>)
  }
    console.log('🔴🟠🟡🟢🔵🟣 | file: BookDetails.jsx | line 84 | BookDetail | BookDetails | renderGenres', renderGenres);

  // const renderGenres = () => {
    console.log(`\n🟣🟣🟣🟣🟣🟣🟣🟣🟣🟣🟣🟣🟣🟣🟣🟣🟣🟣🟣🟣🟣🟣🟣🟣🟣🟣🟣🟣`);
    console.log(`\n🟣🟣🟣🟣🟣🟣🟣🟣🟣🟣🟣🟣🟣🟣🟣🟣🟣🟣🟣🟣🟣🟣🟣🟣🟣🟣🟣🟣`);
    
    console.log('🔴🟠🟡🟢🔵🟣 | file: BookDetails.jsx | line 79 | BookDetail | renderGenres | bookGenres', typeof (bookGenres));
    // if(!bookGenres) return <p>There are no genres YET.</p>
    // if (bookGenres.length === 0) return <p>There are no genres.</p>
    // console.log('🔴🟠🟡🟢🔵🟣 | file: BookDetails.jsx | line 71 | BookDetail | renderGenres | this.state.genres', bookGenres);
    
    // return (
    //   <div className='col-md-6'>
    //     <label htmlFor='selectGenre'>Genre</label>
    //     <select id='selectGenre' className="col-md-6 form-select shadow h-50 border border-primary bg-info bg-opacity-10" aria-label="Select the Genre">
    //       <option className="d-flex align-items-start" selected>Select the Genre</option>
    //       {bookGenres.map((genre) => (
    //       <option value={genre}>{genre}</option>
    //       ))}
    //     </select>
    //   </div>
    // );
  // }

  // useDispatch()
  // const dispatch = useDispatch();
  // dispatch({ type: 'info', payload: 'if applicable'})

  return (
    <div className='container  border border-3 rounded-3 mt-2 p-2 border-info shadow'>

      <div className="container">


        <div className='row'>
        <div className='col-md-12'>
          <label htmlFor='bookTitle'>Title</label>
          <input type='text' className='form-control shadow h-50 border border-primary bg-info bg-opacity-10' id='bookTitle' defaultValue={props.bookDetail.title}></input>
        </div>
      </div>

      <div className='row'>
        <div className='col-md-6'>
          <label htmlFor='inputFirst'>First</label>
          <input type='text' className='form-control shadow h-50 border border-primary bg-info bg-opacity-10' id='inputFirst' defaultValue={props.bookDetail.authorFirst}></input>
        </div>
        <div className='col-md-6'>
          <label htmlFor='inputLast'>Last</label>
          <input type='text' className='form-control shadow h-50 border border-primary bg-info bg-opacity-10' id='inputLast' defaultValue={props.bookDetail.authorLast}></input>
        </div>
        </div>
        {/* <span className='shadow border border-info px-3 py-1 m-50 btn-light rounded-3 bg-info bg-opacity-10 '>Howdy!</span>
        <p className='border border-3 rounded-3 mt-2 px-2 border-info'>Howdy!</p> */}
        <div className='row'>
        <div className='col-md-6'>
        <label htmlFor='selectGenre'>Genre</label>
        <select id='selectGenre' className="col-md-6 form-select shadow h-50 border border-primary bg-info bg-opacity-10" aria-label="Select the Genre">
          <option className="d-flex align-items-start" selected>Select the Genre</option>
          {renderGenres}
        </select>
      </div>
          
        {/* {renderGenres()} */}

      {/*    <div className='col-md-6'>
          <label htmlFor='selectGenre'>Genre</label>
        <select id='selectGenre' className="col-md-6 form-select shadow h-50 border border-primary bg-info bg-opacity-10" aria-label="Select the Genre">
            <option className="d-flex align-items-start" selected>Select the Genre</option>
            <option value="1">Horror</option>
            <option value="2">Sci-Fi</option>
            <option value="3">Romance</option>
        </select>
         <input type='text' className='form-control shadow h-50 border border-primary bg-info bg-opacity-10' id='inputCity' defaultValue={props.bookDetail.genre}></input>
        </div> */}
        <div className='col-md-3'>
          <label htmlFor='inputPhone'>Pages</label>
          <input type='text' className='form-control shadow h-50 border border-primary bg-info bg-opacity-10' id='inputPhone' defaultValue={props.bookDetail.pages}></input>
        </div>
        <div className='col-md-3'>
          <label htmlFor='inputEmail'>Year Published</label>
          <input type='text' className='form-control shadow h-50 border border-primary bg-info bg-opacity-10' id='inputEmail' defaultValue={props.bookDetail.yearPublished}></input>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-2'>
          <label htmlFor='partOfSeries'>Part of Series</label>
          <input type='text' className='form-control shadow h-50 border border-primary bg-info bg-opacity-10' id='partOfSeries' defaultValue={props.bookDetail.partOfSeries}></input>
        </div>
        <div className='col-md-10'>
          <label htmlFor='seriesName'>Series Name</label>
          <input type='text' className='form-control shadow h-50 border border-primary bg-info bg-opacity-10' id='seriesName' defaultValue={props.bookDetail.seriesName}></input>
        </div>
      </div>
      </div>
      </div>
  );
}

export default BookDetails;
 