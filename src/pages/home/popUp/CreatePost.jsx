import React, { useState, useEffect } from "react";
import '../../../assets/createPost.css';
// import { Link } from "react-router-dom";
const axios = require('axios');


const CreatePost = ({ handleClose }) => {

  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [comments, setComments] = useState('');
  const [plotline, setPlotline] = useState('');
  const [unpredictability, setUnpredictability] = useState('');
  const [pace, setPace] = useState('');
  const [writingStyle, setWritingStyle] = useState('');
  const [ending, setEnding] = useState('');
  const [overallEnjoyability, setOverallEnjoyability] = useState('');
  const [tags, setTags] = useState('');

  const handleSubmit = async event => {
    console.log('handleSubmit ran');
    //prevents the default behaviour of the browser submitting the form so that we can handle things instead.
    event.preventDefault(); 

    // request body
    const formData = {
      name,
      title,
      author,
      comments,
      plotline,
      unpredictability,
      pace,
      writingStyle,
      ending,
      overallEnjoyability,
      tags
    }

    // request header
    const header = {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }

    try {
      let resData = await fetch('http://localhost:3000/api', {
        method: 'POST',
        headers: header,
        body: (JSON.stringify(formData))
      })

      const data = await resData.json();
      console.log("Response data", data);
      return data;

    } catch(error) {
      console.error(error);
    }

    //reset input values in form
    setName('');
    setTitle('');
    setAuthor('');
    setComments('');
    setPlotline('');
    setUnpredictability('');
    setPace('');
    setWritingStyle('');
    setEnding('');
    setOverallEnjoyability('');
    setTags('');
  }

  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={handleClose}>x</span>
        <h1>BOOK INFO</h1>
        <form className="createPostForm" action="http://localhost:3000/" onSubmit={handleSubmit} id="post-form">
          <label>NAME</label> <input 
            id="name"
            name="name"
            type="text"
            onChange={event => setName(event.target.value)}
            value={name}
            required
          /> <br/>
          <label>TITLE</label> <input
            id="title"
            name="title"
            type="text"
            onChange={event => setTitle(event.target.value)}
            value={title}
            required
          /><br/>
          <label>AUTHOR</label> <input 
            id="author"
            name="author"
            type="text"
            onChange={event => setAuthor(event.target.value)}
            value={author}
            required
          /><br/>
          <label>COMMENTS</label> <input 
            id="caption"
            name="caption"
            type="text"
            onChange={event => setComments(event.target.value)}
            value={comments}
            required
          /><br/>
          <div className='ratings'> <h2>RATINGS (1-10)</h2> <br/>
          <label>PLOTLINE</label> <input 
              id="plotline"
              name="plotline"
              type="number"
              onChange={event => setPlotline(event.target.value)}
              value={plotline}
              required
            /><br/>
            <label>UNPREDICTABILITY</label> <input 
              id="unpredictability"
              name="unpredictability"
              type="text"
              onChange={event => setUnpredictability(event.target.value)}
              value={unpredictability}
              required
            /> <br/>
            <label>PACE</label> <input 
              id="pace"
              name="pace"
              type="number"
              onChange={event => setPace(event.target.value)}
              value={pace}
            /> <br/>
            <label>WRITING STYLE</label> <input 
              id="writing-style"
              name="writing-style"
              type="number"
              onChange={event => setWritingStyle(event.target.value)}
              value={writingStyle}
              required
            /> <br/>
            <label>ENDING</label> <input 
              id="ending"
              name="ending"
              type="number"
              onChange={event => setEnding(event.target.value)}
              value={ending}
              required
            /> <br/>
            <label>OVERALL ENJOYABILITY</label> <input 
              id="overall_enjoyability"
              name="overall_enjoyability"
              type="number"
              onChange={event => setOverallEnjoyability(event.target.value)}
              value={overallEnjoyability}
              required
            />
          </div>
          <h2>TAGS</h2> <input
            id="tags"
            name="tag"
            type="text"
            onChange={event => setTags(event.target.value)}
            value={tags}
            placeholder="Separate tags with commas (i.e. fiction, romance, etc)"
            required
          /> <br/>
          <button id="submitFormButton" type="submit">Submit Form</button>
        </form>
      </div>
    </div>
  )
}
    
export default CreatePost;