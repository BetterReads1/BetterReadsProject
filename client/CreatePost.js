import React, { Component } from "react";
import { Link } from "react-router-dom";
const axios = require('axios');

const CreatePost = () => {

  return (
    <div>
      <form>
        Name:<input 
          id="name"
          name="name"
          type="text"
        //   onChange={event => setFirstName(event.target.value)}
        //   value={firstName}
        /> <br/>
        Title:<input 
          id="title"
          name="title"
          type="text"
        //   onChange={event => setFirstName(event.target.value)}
        //   value={firstName}
        /><br/>
        Author: <input 
          id="author"
          name="author"
          type="text"
        //   onChange={event => setFirstName(event.target.value)}
        //   value={firstName}
        /><br/>
        Caption: <input 
          id="caption"
          name="caption"
          type="text"
        //   onChange={event => setFirstName(event.target.value)}
        //   value={firstName}
        /><br/>
       Plotline: <input 
          id="plotline"
          name="plotline"
          type="text"
        //   onChange={event => setFirstName(event.target.value)}
        //   value={firstName}
        /><br/>
        Unpredicability: <input 
          id="unpredictability"
          name="unpredictability"
          type="text"
        //   onChange={event => setFirstName(event.target.value)}
        //   value={firstName}
        /> <br/>
        Pace: <input 
          id="pace"
          name="pace"
          type="text"
        //   onChange={event => setFirstName(event.target.value)}
        //   value={firstName}
        /> <br/>
        Writing Style: <input 
          id="writing-style"
          name="writing-style"
          type="text"
        //   onChange={event => setFirstName(event.target.value)}
        //   value={firstName}
        /> <br/>
        Ending: <input 
          id="ending"
          name="ending"
          type="text"
        //   onChange={event => setFirstName(event.target.value)}
        //   value={firstName}
        /> <br/>
        Overall Enjoyability: <input 
          id="overall_enjoyability"
          name="overall_enjoyability"
          type="text"
        //   onChange={event => setFirstName(event.target.value)}
        //   value={firstName}
        /> <br/>
        Tags:<input 
          id="tags"
          name="tag"
          type="text"
        //   onChange={event => setFirstName(event.target.value)}
        //   value={firstName}
        />
      </form>
    </div>
  )
}
  export default CreatePost;