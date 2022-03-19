import { RiInstagramLine } from "react-icons/ri";
import "../scss/Navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <header className="nav-header">
        <Link to='/'>Kingo Art</Link>
      </header>
      <ul className="nav-items">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/About">About</Link>
        </li>
        <li className="nav-item">
          <Link to="/Contact">Contact</Link>
        </li>
        <li className="nav-item">
          <a href="#">
            <RiInstagramLine />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
