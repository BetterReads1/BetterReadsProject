import React, { useState, useEffect } from 'react';
import Posts from '../Posts/Posts.jsx';
const axios = require('axios');

const RenderFeed = () => {
  const postsTestData = [
    {
      name: 'user1',
      title: 'Catcher in the Rye',
      author: 'Salinger',
      comments: 'loved it!',
      plotline: 10,
      unpredictability: 10,
      pace: 10,
      writingStyle: 10,
      ending: 10,
      overallEnjoyability: 10,
      tags: ['fiction', 'angst'],
    },
    {
      name: 'user2',
      title: 'Harry Potter and the Half Blood Prince',
      author: 'J.K Rowling',
      comments: 'super fun',
      plotline: 10,
      unpredictability: 6,
      pace: 6,
      writingStyle: 6,
      ending: 2,
      overallEnjoyability: 9,
      tags: ['mystery', 'teenage angst'],
    },
    {
      name: 'God',
      title: 'Green Eggs and Ham',
      author: 'Your Mom',
      comments: 'Greatest Book Ever!',
      plotline: 10,
      unpredictability: 10,
      pace: 10,
      writingStyle: 10,
      ending: 10,
      overallEnjoyability: 10,
      tags: ['mystery', 'action', 'love'],
    },
  ];

  const posts = [];
  postsTestData.forEach((post) => {
    posts.push(<Posts post={post} key={posts.name} />);
  });

  return <>{posts}</>;
};

export default RenderFeed;

// const postData = {
//   username: posts.name,
//   bookName: posts.title,
//   author: posts.author,
//   comments: posts.comments,
//   reviewId: posts.review_id,
//   plotLine: posts.plotline,
//   unpredictability: posts.unpredictability,
//   pace: posts.pace,
//   writingStyle: posts.writing_style,
//   ending: posts.ending,
//   overall: posts.overall,
//   tags: posts.tags,
// };
// const postData = {
//   username: posts.user_name,
//   bookName: posts.name,
//   author: postIds.author,
//   comments: posts.comments,
//   reviewId: posts.review_id,
//   plotLine: posts.plotline,
//   unpredictability: posts.unpredictability,
//   pace: posts.pace,
//   writingStyle: posts.writing_style,
//   ending: posts.ending,
//   overall: posts.overall,
//   tags: posts.tags,
// };

// const [newestPostIds, setNewestPostIds] = useState([]);
// const [newestPosts,setNewestPosts] = useState([]);

//after newestPostIds is called, the function inside useEffect is invoke. It combines componentDidMount and componentDidUpdate

//need to make it a state if you want it to be remember
// useEffect(() => {
//   setNewestPostIds(postIds);
//   setNewestPosts(postsData);
// }, [newestPostIds])

// useEffect(() => {
//   const fetchData = async () => {
//     await axios.get('http://localhost:3000/')
//       .then( res => {
//         // setNewestPostIds(res.data.postIds);
//         // setNewestPosts(res.data.posts);
//       })
//   }

//   const timeOut = setTimeout(() => {
//     fetchData();
//   }, 5000);

//   return () => clearTimeout(timeOut);
// }, [newestPostIds])

//parses newestPosts and creates jsx elements to render
