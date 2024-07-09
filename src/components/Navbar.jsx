import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src="./tasklogo.jpg" alt="Logo" />
        </div>
        <ul className="navbar-menu">
          <li className="navbar-item"><a href="#refer">Refer</a></li>
          <li className="navbar-item"><a href="#benefits">Benefits</a></li>
          <li className="navbar-item"><a href="#faqs">FAQs</a></li>
          <li className="navbar-item"><a href="#support">Support</a></li>
          <li className="navbar-item"><a href="#resources">Resources</a></li>
          <li className="navbar-item"><a href="#aboutus">About Us</a></li>
        </ul>
        <div className="navbar-actions">
          <button className="login-button">Login</button>
          <button className="try-button">Try for free</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
