import { Link } from "react-router-dom";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <Link to="/" className="footer__logo">
          Scratchy Nib
        </Link>
        <p>Subscribe to our newsletter</p>
        <div className="footer__subscribe">
          <input placeholder="Email Address" />
          <button>Subscribe</button>
        </div>
        <span className="footer__copyright">
          &copy; 2024 All rights reserved
        </span>
      </div>
      <div>
        <ul className="footer__links">
          <li>Links</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Learn</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Gallery</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </div>
      <div>
        <ul className="footer__links">
          <li>Socials</li>
          <li>
            <Link to="/">Facebook</Link>
          </li>
          <li>
            <Link to="/">Instagram</Link>
          </li>
          <li>
            <Link to="/">Twitter</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
