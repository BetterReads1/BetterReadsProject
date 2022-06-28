import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
const axios = require('axios');


const CreatePost = () => {

  // componentDidMount() {
  //     axios.get('http://localhost:3000/')
  //       .then( res => {
  //         // console.log(res.locals.test);
  //         console.log(res.data);
  //       })
  //       .catch(err => {
  //         console.log(err);
  //       })
  // }

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
    event.preventDefault(); //prevents the default behaviour of the browser submitting the form so that we can handle things instead.

    //send post request to backend
    const form = event.currentTarget; //gets elements the event handler was attached to
    const url = form.action; //takes API url from form's action attirbute

    try{
      const formData = new FormData(form); //takes all the fields in the form and makes their values available through a `FormData` instance
      console.log("form data: ", formData);
      formData.tags = formData.tags.split(','); //make tags an array of strings
      consoel.log("form tags data should be an array: ", formData.tags);
      header = {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
      const responseData = await axios.post(url, formData, header);
      console.log({ responseData });
    } catch(error){
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
    <div id="form-container">
      <form action="http://localhost:3000/" onSubmit={handleSubmit} id="post-form">
        Name:<input 
          id="name"
          name="name"
          type="text"
          onChange={event => setName(event.target.value)}
          value={name}
          required
        /> <br/>
        Title:<input 
          id="title"
          name="title"
          type="text"
          onChange={event => setTitle(event.target.value)}
          value={title}
          required
        /><br/>
        Author: <input 
          id="author"
          name="author"
          type="text"
          onChange={event => setAuthor(event.target.value)}
          value={author}
          required
        /><br/>
        Comments: <input 
          id="caption"
          name="caption"
          type="text"
          onChange={event => setComments(event.target.value)}
          value={comments}
          required
        /><br/>
        <div className='ratings'> Ratings: <br/>
          Plotline: <input 
            id="plotline"
            name="plotline"
            type="number"
            onChange={event => setPlotline(event.target.value)}
            value={plotline}
            required
          /><br/>
          Unpredictability: <input 
            id="unpredictability"
            name="unpredictability"
            type="text"
            onChange={event => setUnpredictability(event.target.value)}
            value={unpredictability}
            required
          /> <br/>
          Pace: <input 
            id="pace"
            name="pace"
            type="number"
            onChange={event => setPace(event.target.value)}
            value={pace}
          /> <br/>
          Writing Style: <input 
            id="writing-style"
            name="writing-style"
            type="number"
            onChange={event => setWritingStyle(event.target.value)}
            value={writingStyle}
            required
          /> <br/>
          Ending: <input 
            id="ending"
            name="ending"
            type="number"
            onChange={event => setEnding(event.target.value)}
            value={ending}
            required
          /> <br/>
          Overall Enjoyability: <input 
            id="overall_enjoyability"
            name="overall_enjoyability"
            type="number"
            onChange={event => setOverallEnjoyability(event.target.value)}
            value={overallEnjoyability}
            required
          />
        </div>
        Tags:<input 
          id="tags"
          name="tag"
          type="text"
          onChange={event => setTags(event.target.value)}
          value={tags}
          placeholder="Separate tags with commas (i.e. fiction, romance, etc)"
          required
        /> <br/>
        <button type="submit">Submit form</button>
      </form>
    </div>
  )
}
    
export default CreatePost;