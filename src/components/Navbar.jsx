import React from 'react';
import { Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux'
import img from '../images/BestReads.png'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav id='navbar'>
            <div id='el'>
                <img src={img}/>              
                  <Link to='/'>
                    <button class='links'>Home</button>
                  </Link>
                  <Link to='/'>
                    <button class='links'>Explore</button>
                  </Link>
                  <Link to='/'>
                    <button class='links'>About</button>
                  </Link>
            </div>
        </nav>
    )
}

export default Navbar;