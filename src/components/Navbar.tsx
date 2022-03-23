import { RiInstagramLine } from "react-icons/ri";
import { GiCirclingFish } from "react-icons/gi";
import "../scss/Navbar.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [sideMenuOpen, setSideMenuOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
    windowWidth>900?setSideMenuOpen(false):setSideMenuOpen(sideMenuOpen);
  }, [windowWidth]);

  useEffect(() => {
    sideMenuOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "visible");
  }, [sideMenuOpen]);

  return (
    <nav className="navbar">
      <header className="nav-header">
        <Link to="/">
          <span>Kingo Art</span>
          <GiCirclingFish />
        </Link>
      </header>
      {windowWidth > 900 ? (
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
      ) : (
        <button
          className={
            sideMenuOpen ? "hamburger-btn hamburger-open" : "hamburger-btn"
          }
          onClick={() =>
            sideMenuOpen ? setSideMenuOpen(false) : setSideMenuOpen(true)
          }
        >
          <div className="hamburger-btn-line"></div>
        </button>
      )}
      <ul className={sideMenuOpen ? "sideMenu" : "sideMenu closed"}>
        <li className="nav-item">
          <Link onClick={() => setSideMenuOpen(false)} to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link onClick={() => setSideMenuOpen(false)} to="/About">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link onClick={() => setSideMenuOpen(false)} to="/Contact">
            Contact
          </Link>
        </li>
        <li className="nav-item">
          <a onClick={() => setSideMenuOpen(false)} href="#">
            <RiInstagramLine />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
