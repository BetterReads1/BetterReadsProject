import React, {useState, useEffect} from 'react';
import Post from './Post.jsx'
const axios = require('axios');

const RenderFeed = () => {
  const [newestPostIds,setNewestPostIds] = useState([]);
  // const [newestPosts,setNewestPosts] = useState([]);

  const postIds = [0, 1, 2];
  // HardCoded newPosts
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
    for(let i = 0; i < 1; i++) {
      const tempTags = newestPosts[i].tags.join(", ");
      posts.push(
        <Post name={newestPosts[i].name} title={newestPosts[i].title} author={newestPosts[i].author} comments={newestPosts[i].comments}
          plotline={newestPosts[i].plotline} unpredictability={newestPosts[i].unpredictability} pace={newestPosts[i].pace}
          writingStyle={newestPosts[i].writingStyle} ending={newestPosts[i].ending} overallEnjoyability={newestPosts[i].overallEnjoyability}
          tags={tempTags} key={Math.random()}
          >
        </Post>
      );
    }

  return (
    <div className="render-feed">
      {posts}
    </div>
  )
}

export default RenderFeed;