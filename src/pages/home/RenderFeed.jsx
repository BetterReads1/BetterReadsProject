import React, {useState, useEffect} from 'react';
const axios = require('axios');

const RenderFeed = () => {
  const [newestPostIds,setNewestPostIds] = useState([]);
  // const [newestPosts,setNewestPosts] = useState([]);

  const postIds = [0, 1, 2];
  const newestPosts = [
    {
      name: "user1",
      title: "Catcher in the Rye",
      author: "Salinger",
      comments: "loved it!",
      plotline: 10,
      unpredictability: 10,
      pace: 10,
      writingStyle: 10,
      ending: 10,
      overallEnjoyability: 10,
      tags: ["fiction", "angst"]
    },
    {
      name: "user2",
      title: "Harry Potter and the Half Blood Prince",
      author: "J.K Rowling",
      comments: "super fun",
      plotline: 10,
      unpredictability: 6,
      pace: 6,
      writingStyle: 6,
      ending: 2,
      overallEnjoyability: 9,
      tags: ['mystery','teenage angst']
    },
    {
      name: "God",
      title: "Green Eggs and Ham",
      author: "Your Mom",
      comments: "Greatest Book Ever!",
      plotline: 10,
      unpredictability: 10,
      pace: 10,
      writingStyle: 10,
      ending: 10,
      overallEnjoyability: 10,
      tags: ['mystery','action','love']
    }
  ]

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
  const posts = [];
    for(let i = 0; i < 3; i++) {
      const tempTags = newestPosts[i].tags.join(", ");
      posts.push(
      <div id="post">
        <p>Name: {newestPosts[i].name}</p> <br/>
        <p>Title: {newestPosts[i].title}</p> <br/>
        <p>Author: {newestPosts[i].author}</p> <br/>
        <p>Comments: {newestPosts[i].comments}</p> <br/>
        <ul id="ratings">
          <li>Plotline: {newestPosts[i].comments}</li>
          <li>Unpredictability: {newestPosts[i].unpredictability}</li>
          <li>Pace: {newestPosts[i].pace}</li>
          <li>Writing Style: {newestPosts[i].writingStyle}</li>
          <li>Ending: {newestPosts[i].ending}</li>
          <li>Overall Enjoyability: {newestPosts[i].overallEnjoyability}</li>
        </ul>
        <p>Tags: {tempTags}</p><br/>
      </div>
      );
    }

  return (
    <div className="render-feed">
      {posts}
    </div>
  )
}

export default RenderFeed;