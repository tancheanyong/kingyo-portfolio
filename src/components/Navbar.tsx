import { RiInstagramLine } from "react-icons/ri";
import { GiCirclingFish } from "react-icons/gi";
import "../scss/Navbar.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
  }, [windowWidth]);

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
        <button className={navOpen?'hamburger-btn hamburger-open':'hamburger-btn'} onClick={()=>navOpen?setNavOpen(false):setNavOpen(true)}>
          <div className="hamburger-btn-line"></div>
        </button>
      )}
    </nav>
  );
}

export default Navbar;
