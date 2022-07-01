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
/*
* ==================================================
*   Set bookGenres to be use react state with
*   an initial value of empty array.
!   AND
*   Allow setBookGenres to be used to update the
*   state.
* ==================================================
*/
  const [bookGenres, setBookGenres] = useState([]);
  // const [bookDetails, setBookDetails] = useState(
  //   {
  //     genres: [],
  //     author: "J"
  //   })


/*
* ==================================================
*   Temporary data until db connection is complete.
* ==================================================
*/
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


/*
* ==================================================
*   useEffect (for React hooks vs. 
*   ComponentDidMount for React Classes) to actually 
*   perform the fetch to pull from the server.
* ==================================================
*/
  useEffect(() => {
    fetch('http://localhost:3000/genre')
      .then(response => response.json())
      .then(data => { setBookGenres([...data]) });
  }, [])
  
  


/*
  * ==================================================
  *   Next We want to render multiple copies of an
  *   HTML element, each with a unique value that was
  *   returned from our fetch above.
  * 
  *   In THIS case, we are generating multiple HTML
  *   <option> elements to add the retrieved genres
  *   to a dropdown list.
  * 
  *   We do this by initializing an empty array and
  *   using the Array.map method to push a properly
  *   structured <option> element for each value 
  *   returned from our fetch onto the array (which 
  *   will be rendered below.).
  * ==================================================
  */
  const renderGenres = [];
  if (bookGenres) {
    bookGenres.map((genre) => {
      renderGenres.push(<option value={genre} key={genre}>{genre}</option>)
    })
  } else {
    renderGenres.push(<p>There are no genres.</p>)
  }


/*
* ==================================================
*   Here we return the HTML elements that make 
*   up the BookDetails React component.
* ==================================================
*
*   We choose to use Bootstrap creating a responsive
*   UI to update as sceen dimensions change.
*
*   When using Bootstrap with React ... all of the 
*   bootstrap configuration options are set for each
*   element in its 'className' property.
* ==================================================
*   The display is broken down into a series of 
*   nested container <div>'s.  This allows for each 
*   individual <div> to have its own bootstrap 
*   settings.
* ==================================================
*/
  return (
    <div className='container border border-3 rounded-3 mt-2 p-2 border-info shadow'> { /* First container Outter most */ }
      <div className="container"> { /* Second container Inner */ }
        <div className='row'>     { /* 1st row in the container */ }
        <div className='col-md-12'>   { /* Which contains a single column taking the entire width (12 out of 12) */ }
          <label htmlFor='bookTitle'>Book Title</label>
          <input type='text' className='form-control shadow h-50 border border-primary bg-info bg-opacity-10' id='bookTitle' defaultValue={props.bookDetail.title}></input>
        </div>
      </div>

      <div className='row'>   { /* 2nd row in the container */ }
        <div className='col-md-6'>  { /* 1st column in the row using half of the available width (6 out of 12) */ }
          <label htmlFor='inputFirst'>Author's First</label>
          <input type='text' className='form-control shadow h-50 border border-primary bg-info bg-opacity-10' id='inputFirst' defaultValue={props.bookDetail.authorFirst}></input>
        </div>
        <div className='col-md-6'>  { /* 2nd column in the row using half of the available width (6 out of 12) */ }
          <label htmlFor='inputLast'>Author's Last</label>
          <input type='text' className='form-control shadow h-50 border border-primary bg-info bg-opacity-10' id='inputLast' defaultValue={props.bookDetail.authorLast}></input>
        </div>
        </div>
        <div className='row'> { /* 3rd row in the container */ }
        <div className='col-md-6'>  { /* 1st of 3 columns in the row using half of the available width (6 out of 12). */ }
            <label htmlFor='selectGenre'>Genre</label>
            {
              /*
              * ==================================================
              *   Here we create our dropdown list of genres whose
              *   values were retrieved from the db. 
              *
              *   The next two lines set up the structure of the 
              *   dropdown with <select></select> and the 
              *   1st <option></option> (which MUST use keyword
              *   'defaultValue' for React)      
              * ==================================================
              */
            }
        <select id='selectGenre' className="col-md-6 form-select shadow h-50 border border-primary bg-info bg-opacity-10" aria-label="Select the Genre">
          <option className="d-flex align-items-start" defaultValue>Select the Genre</option>
              {
                /*
                ! ==================================================
                !   THIS pulls in all the individual <option></option> 
                !   elements from the renderGenres variable filled 
                !   out above (line 82-89)
                ! ==================================================
                */
              }
          {renderGenres}
        </select>
      </div>
        <div className='col-md-3'>  { /* 2nd of 3 columns in the row using 3/12 of the width. */ }
          <label htmlFor='inputPages'>Pages</label>
          <input type='text' className='form-control shadow h-50 border border-primary bg-info bg-opacity-10' id='inputPages' defaultValue={props.bookDetail.pages}></input>
        </div>
        <div className='col-md-3'>  { /* 3rd of 3 columns in the row using 3/12 of the width. */ }
          <label htmlFor='inputYear'>Year Published</label>
          <input type='text' className='form-control shadow h-50 border border-primary bg-info bg-opacity-10' id='inputYear' defaultValue={props.bookDetail.yearPublished}></input>
        </div>
        </div>
        <div className='row'>  { /* 4th row in the container */ }
              <div className="form-check form-switch col-md-4 ps-3 ms-0"> { /* 1st of 2 columns using 2/12 of the width. */}
                    <div className='row pt-4'>
                          <label className="form-check-label text-start" htmlFor="partOfSeries">Part of Series</label>
                          <input className="form-check-input" type="checkbox" id="partOfSeries"></input>
                    </div>
          </div>
          <div className='col-md-1'> { /* 2nd of 2 columns using 10/12 of the width. */ }
                    <label htmlFor='seriesNum text-center'>&nbsp;&nbsp;#</label>
                    <input type='text' className='form-control m-0 p-0 ps-1 shadow h-50 border border-primary bg-info bg-opacity-10' id='seriesNum' defaultValue={props.bookDetail.seriesNum}></input>
              </div>
              <div className='col-md-7'> { /* 2nd of 2 columns using 10/12 of the width. */ }
                    <label htmlFor='seriesName'>Series Name</label>
                    <input type='text' className='form-control shadow h-50 border border-primary bg-info bg-opacity-10' id='seriesName' defaultValue={props.bookDetail.seriesName}></input>
              </div>
        </div>

      </div> { /* End of Inner Container */}
      </div> 
  );
}

export default BookDetails;
 