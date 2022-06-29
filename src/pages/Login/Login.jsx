import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './Login.css'
// import img from '../../images/BestReads.png';

const Login = () => {
    return (
      <div id='outerBox'>
      <div id='loginBox'>
        <label><strong>Log In</strong></label><br/>
        <input type="text" placeholder="Username " required></input> 
        <input type="password" placeholder="Password" required></input>
        <Link to='/app'>
            <button>Login</button>
        </Link>
        <Link to='/signup' id='signuplink'>
            <p>Sign up?</p>
        </Link>
      </div>
      </div>
    );
}

export default Login;