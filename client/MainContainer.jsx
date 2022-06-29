import React, { Component } from "react";
import CreatePost from './CreatePost.jsx';
import RenderFeed from './RenderFeed.jsx';

class MainContainer extends Component {


/*
! ==================================================
!   This is why/where everything is presented in a 
!   single column.
! ==================================================
*/

    render() {
      return (
        <div id="main-container">
          <CreatePost/>
          <RenderFeed/>
        </div>
      );
    }
  };
  export default MainContainer;