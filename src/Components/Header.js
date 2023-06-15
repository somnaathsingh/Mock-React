import React from 'react';
import './Header.css'; 
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Logo from './logo.png'; 

const Header = () => {
  return (
    <div>
      <nav className="header-nav">
        <img className="header-logo" src={Logo} alt="React Logo" />
        <ul className="header-list">
          <li className="header-item"><Link to="/introduction">Introduction</Link></li>
          <li className="header-item"><Link to="/team">Team</Link></li>
          <li className="header-item"><Link to="/about">About</Link></li>

        </ul>
      </nav>
    </div>
  );
};

export default Header;
