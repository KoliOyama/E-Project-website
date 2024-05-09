import React, { useState } from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import { HiOutlineX } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import './header.scss';
import VisitorCounter from './components/visitor-counter/VisitorCounter';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(true);

  function toggleMenu() {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  }

  return (
    <header className="header">
      <div className="header__content container">
        <div className="header-toggle" onClick={toggleMenu}>
          {menuOpen ? <HiOutlineX /> : <HiMenuAlt4 />}
        </div>
        <nav className={`nav-container ${menuOpen ? 'isMenu' : ''}`}>
          <ul className="nav-links">
            <li className="nav-link">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-link">
              <Link to="/learn">Learn</Link>
            </li>
            <li className="nav-link">
              <Link to="/about">About</Link>
            </li>
            <li className="nav-link">
              <Link to="/gallery">Gallery</Link>
            </li>
            <li className="nav-link">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <div className="logo-container">
          <Link to="/" className="header-logo">
            Scratchy Nib
          </Link>
        </div>

        <VisitorCounter />
      </div>
    </header>
  );
};

export default Header;
