import React, { Component } from "react";
import CreatePost from '../components/CreatePost.jsx';
import RenderFeed from '../components/RenderFeed.jsx';
import BookContainer from './BookContainer.jsx';

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
        {/* <CreatePost /> */}
          <BookContainer />
          {/* <CreatePost/> */}
        {/* <RenderFeed/> */}
        
        </div>
      );
    }
  ;
  export default MainContainer;