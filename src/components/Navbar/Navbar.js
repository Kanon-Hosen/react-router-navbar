import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                Logo
            </div>
            <div className='navItem'>
            <NavLink to='home'>Home</NavLink>
            <NavLink to='about'>About</NavLink>
            <NavLink to='blog'>Blog</NavLink>
            <NavLink to='contact'>Contact</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;