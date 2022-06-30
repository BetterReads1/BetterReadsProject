import React, { Component } from "react";
// import CreateReview from '../components/CreateReview.jsx';
// import RenderFeed from '../components/RenderFeed.jsx';
import BookContainer from './BookContainer.jsx';
import ReviewEntryContainer from './ReviewEntryContainer.jsx'

const MainContainer = () =>  {


/*
! ==================================================
!   This is why/where everything is presented in a 
!   single column.
! ==================================================
*/

// Formatting for components: 
// <BookContaIner /> 
// Inside book container, render a <BookCard />. 

    return (
      <div id="container border border-3 rounded-3 mt-2 p-2 border-info shadow">
        <ReviewEntryContainer />
        <div>
          <div className="container h-5">
            <br></br>
            <br></br>
            Below is where ALL the db results will be displayed.
            <br></br>
            <br></br>
          </div>
        </div>
          <BookContainer />
          {/* <CreatePost/> */}
        {/* <RenderFeed/> */}
        
        </div>
      );
    }
  ;
  export default MainContainer;