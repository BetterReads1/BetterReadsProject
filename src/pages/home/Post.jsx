import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import '../../assets/post.css';
import RelatedReviews from './popUp/RelatedReviews.jsx';

const Post = ({name, title, author, comments, plotline, unpredictability, pace, writingStyle, ending, overallEnjoyability, tags}) => {

    const [isRelatedReviewsOpen, setisRelatedReviewsOpen] = useState(false);

    const toggleRelatedReviewsPopup = () => {
        setisRelatedReviewsOpen(!isRelatedReviewsOpen);
    }

    const handleGetOtherReviews = () => {
        console.log("handleGetReviews invoked");
    }
    
    const handleUpdateReview = () => {
        console.log("handleUpdateReview invoked");
    }

    const handleDeleteReview = () => {
        console.log("handleDeleteReview invoked");
    }


return(
    <div id="post-section">
        <div id="postInfo">
            <ul>
                <li>Name: {name}</li> <br/>
                <li>Title: {title}</li> <br/>
                <li>Author: {author}</li> <br/>
                <li>Comments: {comments}</li> <br/>
                <li>Tags: {tags}</li> <br/>
            </ul>
            <input className="button-post" type="button" value="See Other Reviews" onClick={toggleRelatedReviewsPopup}/>
            {isRelatedReviewsOpen && <RelatedReviews handleClose={toggleRelatedReviewsPopup}></RelatedReviews>}   

        </div>
        <div id="ratings">
            <ul>
                <li>Plotline: {plotline}</li> <br/>
                <li>Unpredictability: {unpredictability}</li> <br/>
                <li>Pace: {pace}</li> <br/>
                <li>Writing Style: {writingStyle}</li> <br/>
                <li>Ending: {ending}</li> <br/>
                <li>Overall Enjoyability: {overallEnjoyability}</li> <br/>
            </ul>
            <div id="button-container">
                <button className="button-post" onClick={handleUpdateReview}>Update My Review</button>
                <button className="button-post" onClick={handleDeleteReview}>Delete My Review</button>
            </div>
        </div>
    </div>
  )
}

export default Post;