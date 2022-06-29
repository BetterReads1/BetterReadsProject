import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './Signup.css'
// import img from '../../images/BestReads.png';

const Signup = () => {
    return (
      <center>
      <div id='signupBox'>
        <label>Sign In</label>
        <input type="text" placeholder="Username " required></input> 
        <input type="password" placeholder="Password" required></input>
        <Link to='/app'>
            <button>Login</button>
        </Link>
        <Link to='/' id='loginlink'>
            <p>Already Have an Account?</p>
        </Link>
      </div>
      </center>
    );
}

export default Signup;