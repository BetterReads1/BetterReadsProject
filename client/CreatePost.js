import React, { Component } from "react";
import { Link } from "react-router-dom";
const axios = require('axios');

class CreatePost extends Component {
    // constructor(props) {
    //   // super(props);
    // }

    componentDidMount() {
      axios.get('http://localhost:3000/')
        .then( res => {
          // console.log(res.locals.test);
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        })
    }

    render() {
      return (
        <div> CREATE POST </div>
      );
    }
  }
  export default CreatePost;