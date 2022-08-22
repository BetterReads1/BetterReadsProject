import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../assets/post.css';

const Post = ({name, title, author, comments, plotline, unpredictability, pace, writingStyle, ending, overallEnjoyability, tags}) => {

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
            <button className="button-post" onClick={handleGetOtherReviews}>See Other Reviews</button>
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