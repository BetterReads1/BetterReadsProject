import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import styles from '../assets/signup.css';

export default function Signup() {

  const navigate = useNavigate();

  const [newUser, setNewUser] = useState({email: '', username: '', password: ''});

  const handleChange = (e) => {
    setNewUser({...user, [e.target.name]: e.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("new user:", newUser);

    //post request to database
    const requestDetails = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: newUser.email, newUser: user.username, password: newUser.password })
    }
    alert('Account successfuly created. Please sign in to get started.')
    //redirect to home page
    navigate('/');

    // fetch('/signup', requestDetails)
    //   .then(response => response.json())
    //   .then(response => {
    //     console.log(response); //response is boolean
    //     //if user exists in db
    //     if(response.userCreated === true){
    //       alert('Account successfuly created. Please sign in to get started.')
    //       //redirect to home page
    //       navigate('/login');
    //     }
    //     //else
    //     else{
    //       //alert
    //       alert('Unable to create account. Please try again');
    //     }
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   })
  }

  return(
    <div className='container'> 
      <div id='signup-page'>
        <form onSubmit={handleSubmit}>
          <div className="form-inner">
            <h2>Create an Account</h2>
            <div className="form-group">
              <label htmlFor="email"> Email: </label>
              <input type="text" name="email" id="email" onChange={handleChange} value={newUser.email}/>
            </div>
            <div className="form-group">
              <label htmlFor="username"> Username: </label>
              <input type="text" name="username" id="username" onChange={handleChange} value={newUser.username}/>
            </div>
            <div className="form-group">
              <label htmlFor="password"> Password: </label>
              <input type="text" name="password" id="password" onChange={handleChange} value={newUser.password}/>
            </div>
            <div id='button-container'>
              <input type="submit" value="Submit" />
            </div>
            <div className='nav-link' onClick={e => navigate('/login')}>
              Already have an account?
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}