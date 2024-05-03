import { HiUser } from "react-icons/hi";
import { Link } from "react-router-dom";
import "./header.scss";
import Logo from "../../assets/Scratchy-Nib-logo.svg";
import VisitorCounter from "./components/visitor-counter/VisitorCounter";

const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav-container">
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
        <img src={Logo} alt="Scratchy nib logo" />
      </div>

      {/* <div className="header__visitor-count">
      <HiUser />
      <span>10</span>
    </div> */}
      <VisitorCounter />
    </header>
  );
};

export default Header;
