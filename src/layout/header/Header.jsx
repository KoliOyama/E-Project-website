import React, {useState} from 'react';
import { HiUser } from "react-icons/hi";
import { HiMenuAlt4 } from "react-icons/hi";
import { HiOutlineX } from "react-icons/hi";
import { Link } from "react-router-dom";
import "./header.scss";
import Logo from "../../assets/Scratchy-Nib-logo.svg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="header">
      <div className="header__content">
        <div className="header__menu-toggle">
          <HiMenuAlt4 />
        </div>
        <nav className={"header__nav-container" + (menuOpen ? "isMenu" : "")}>
          <ul className="header__nav-links">
            <li className="header__nav-link">
              <Link to="/">Home</Link>
            </li>
            <li className="header__nav-link">
              <Link to="/learn">Learn</Link>
            </li>
            <li className="header__nav-link">
              <Link to="/about">About</Link>
            </li>
            <li className="header__nav-link">
              <Link to="/gallery">Gallery</Link>
            </li>
            <li className="header__nav-link">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <div className="header__logo-container">
          <Link to="/">
            <img src={Logo} alt="Scratchy nib logo" />
          </Link>
        </div>

        <div className="header__visitor-count">
          <HiUser />
          <span>10</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
