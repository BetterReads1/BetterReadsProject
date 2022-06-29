import React from 'react';

//TODO: make sure that the value matches with data received from database
const Posts = ({ post }) => {
  return (
    <div className="render-feed">
      <div id="post">
        <br />
        <p>Title: {post.title}</p> <br />
        <p>Author: {post.author}</p> <br />
        <p>Comments: {post.comments}</p> <br />
        <h3>REVIEW:</h3>
        <ul id="ratings">
          <li>Plotline: {post.plotline}</li>
          <li>Unpredictability: {post.unpredictability}</li>
          <li>Pace: {post.pace}</li>
          <li>Writing Style: {post.writing_style}</li>
          <li>Ending: {post.ending}</li>
          <li>Overall: {post.overall}</li>
        </ul>
        <p>Tags: {post.tags.join(', ')}</p>
        <br />
      </div>
    </div>
  );
};

export default Posts;
