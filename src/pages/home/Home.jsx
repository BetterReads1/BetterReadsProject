import React, { useState } from "react";
import RenderFeed from './RenderFeed.jsx';
import CreatePost from "./popUp/CreatePost.jsx";
import '../../assets/home.css';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {

  const [isCreatePostOpen, setIsCreatePostOpen] = useState(false);

  const toggleCreatePostPopup = () => {
    setIsCreatePostOpen(!isCreatePostOpen);
  }
  
  return(
    <div id="main-section">
      <RenderFeed/>
      <input id="createPostButton" type="button" value="Add Review" onClick={toggleCreatePostPopup}/>
      {isCreatePostOpen && <CreatePost handleClose={toggleCreatePostPopup}></CreatePost>}
    </div>
  )
}

export default Home;