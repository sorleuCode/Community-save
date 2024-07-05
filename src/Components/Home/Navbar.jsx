import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">iSave</div>
            <ul className="navbar-links">
                <li>About Us</li>
                <li>Blog</li>
                <li>FAQ</li>
                <li>Contact</li>
            </ul>
            <Link to="/login"><button className="navbar-login">Log In</button></Link>
        </nav>
    );
};

export default Navbar;
