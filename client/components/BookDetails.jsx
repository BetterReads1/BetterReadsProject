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


const BookDetails = () => {
  // class BookDetail extends Component {

  
  const [bookGenres, setBookGenres] = useState([]);
  // const [bookDetails, setBookDetails] = useState(
  //   {
  //     genres: [],
  //     author: "J"
  //   })
  
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
      .then(data => { setBookGenres([...data]) });

  }, [])

  const renderGenres = [];
  if (bookGenres) {
    bookGenres.map((genre) => {
      console.log('🔴🟠🟡🟢🔵🟣 | file: BookDetails.jsx | line 74 | BookDetail | BookDetails | renderGenres', genre);
      renderGenres.push(<option value={genre} key={genre}>{genre}</option>)
    }
    )
  } else {
    renderGenres.push(<p>There are no genres.</p>)
  }
    console.log('🔴🟠🟡🟢🔵🟣 | file: BookDetails.jsx | line 84 | BookDetail | BookDetails | renderGenres', renderGenres);


  return (
    <div className='container border border-3 rounded-3 mt-2 p-2 border-info shadow'>
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
          <option className="d-flex align-items-start" defaultValue>Select the Genre</option>
          {renderGenres}
        </select>
      </div>

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
 