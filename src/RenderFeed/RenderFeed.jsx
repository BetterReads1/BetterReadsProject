import React from 'react';
import Posts from '../Posts/Posts.jsx';

//REMINDER:  -> make GET request in MainContainer and pass data as props to here
//TODO: Delete test data and if data isn't in an array, store it in one to iterate over and pass as prop to Posts component
const RenderFeed = () => {
  const postsTestData = [
    {
      review_id: 1,
      title: 'Catcher in the Rye',
      author: 'Salinger',
      comments: 'loved it!',
      plotline: 10,
      unpredictability: 10,
      pace: 10,
      writingStyle: 10,
      ending: 10,
      overall: 10,
      tags: ['fiction', 'angst'],
    },
    {
      review_id: 2,
      title: 'Harry Potter and the Half Blood Prince',
      author: 'J.K Rowling',
      comments: 'super fun',
      plotline: 10,
      unpredictability: 6,
      pace: 6,
      writing_style: 6,
      ending: 2,
      overall: 9,
      tags: ['mystery', 'teenage angst'],
    },
    {
      review_id: 3,
      title: 'Green Eggs and Ham',
      author: 'Your Mom',
      comments: 'Greatest Book Ever!',
      plotline: 10,
      unpredictability: 10,
      pace: 10,
      writing_style: 10,
      ending: 10,
      overall: 10,
      tags: ['mystery', 'action', 'love'],
    },
  ];

  const posts = [];
  postsTestData.forEach((post) => {
    posts.push(<Posts post={post} key={post.review_id} />);
  });

  return <>{posts}</>;
};

export default RenderFeed;
