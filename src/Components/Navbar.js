import React from 'react';
import { Link } from 'react-router-dom';
import './Calculator.css';

function Navbar() {
  return (
    <nav className="navbar-container">
      <h1>Math Magicians</h1>
      <ul className="navmenu">
        <li>
          <Link to="/" style={{ textDecoration: 'none' }}>Home</Link>
        </li>
        <li>
          <Link to="/Calculator" style={{ textDecoration: 'none' }}>Calculator</Link>
        </li>
        <li>
          <Link to="/Display" style={{ textDecoration: 'none' }}>Quote</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
