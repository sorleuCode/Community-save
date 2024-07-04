import React from 'react';
import './Navbar.css';

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
            <button className="navbar-login">Log In</button>
        </nav>
    );
};

export default Navbar;
