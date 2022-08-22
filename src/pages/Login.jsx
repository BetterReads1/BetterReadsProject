import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import styles from '../assets/login.css';

export default function Login() {

  const navigate = useNavigate();
  const [user, setUser] = useState({username: '', password: ''});

  const handleChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("user:", user);

    //post request to database
    const requestDetails = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user: user.username, password: user.password })
    }
    fetch('/login', requestDetails)
      .then(response => response.json())
      .then(response => {
        console.log(response); //response is boolean - true if user exists in db, else false
        //if user exists in db
        if(response.validUser === true){
          //persist user data by storing in session storage
          localStorage.setItem('userId', response.userId)
          //redirect to home page
          navigate('/home');
        }
        //else
        else{
          //alert
          alert('Incorrect username and/or password');
        }
      })
      .catch(error => {
        console.log(error);
      })
  }

  return(
    <div className='container'> 
      <div id='login-page'>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-inner">
            <h2>Login</h2>
            <div className="form-group">
              <label htmlFor="username"> Username: </label>
              <input type="text" name="username" id="username" onChange={handleChange} value={user.username}/>
            </div>
            <div className="form-group">
              <label htmlFor="password"> Password: </label>
              <input type="text" name="password" id="password" onChange={handleChange} value={user.password}/>
            </div>
            <div id='button-container'>
              <input type="submit" value="LOGIN" />
            </div>
            <div className='nav-link' onClick={e => navigate('/signup')}>
              Click here to create an account
            </div>
          </div>
        </form>
      </div>
    </div> 
  )
}