import React, { Component } from "react";
import { Link } from "react-router-dom";
const axios = require('axios');

class CreatePost extends Component () {
    constructor(props) {
      super(props);
    }

    componentDidMount() {
      axios.get('/')
        .then( res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        })
    }

    render() {
    //   return (
        
    //   );
    }
  }
  export default CreatePost;