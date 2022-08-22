import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../../assets/post.css';

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
        <div>
            <p>Name: {name}</p> <br/>
            <p>Title: {title}</p> <br/>
            <p>Author: {author}</p> <br/>
            <p>Comments: {comments}</p> <br/>
            <p>Tags: {tags}</p> <br/>
            <button onClick={handleGetOtherReviews}>See Other Reviews</button>
        </div>
        <div >
            <ul id="ratings">
                <li>Plotline: {plotline}</li> <br/>
                <li>Unpredictability: {unpredictability}</li> <br/>
                <li>Pace: {pace}</li> <br/>
                <li>Writing Style: {writingStyle}</li> <br/>
                <li>Ending: {ending}</li> <br/>
                <li>Overall Enjoyability: {overallEnjoyability}</li> <br/>
            </ul>
            <button onClick={handleUpdateReview}>Update My Review</button>
            <button onClick={handleDeleteReview}>Delete My Review</button>
        </div>
    </div>
  )
}

export default Post;