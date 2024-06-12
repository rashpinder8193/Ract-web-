import React from 'react';
import './header.css';

const Header = ({ title }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <nav>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
