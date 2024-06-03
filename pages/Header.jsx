// src/Header.js
import React from 'react';
import './Header.css'; // Optional: for adding styles

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="container">
          <a href="/" className="navbar-brand">
            My Website
          </a>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="/" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a href="/about" className="nav-link">About</a>
            </li>
            <li className="nav-item">
              <a href="/contact" className="nav-link">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
