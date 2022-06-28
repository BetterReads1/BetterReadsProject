import React, { Component } from "react";
import CreatePost from './CreatePost.jsx';
import RenderFeed from './RenderFeed.jsx';

class MainContainer extends Component {
    // constructor(props){
    //     // this.state: {

    //     // }
    // }

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