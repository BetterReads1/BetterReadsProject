import React from 'react';

const Posts = ({ post }) => {
  return (
    <div className="render-feed">
      <div id="post">
        <p>
          <b>User:</b> {post.name}
        </p>
        <br />
        <p>Title: {post.title}</p> <br />
        <p>Author: {post.author}</p> <br />
        <p>Comments: {post.comments}</p> <br />
        <h3>REVIEW:</h3>
        <ul id="ratings">
          <li>Plotline: {post.plotline}</li>
          <li>Unpredictability: {post.unpredictability}</li>
          <li>Pace: {post.pace}</li>
          <li>Writing Style: {post.writingStyle}</li>
          <li>Ending: {post.ending}</li>
          <li>Overall Enjoyability: {post.overallEnjoyability}</li>
        </ul>
        <p>Tags: {post.tags}</p>
        <br />
      </div>
    </div>
  );
};

export default Posts;
