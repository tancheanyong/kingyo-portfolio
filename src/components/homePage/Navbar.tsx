import { RiInstagramLine } from "react-icons/ri";
import "../../scss/Navbar.scss";

function Navbar() {
  return (
    <nav className="navbar">
      <header className="nav-header"><a href="#">Kingo Art</a></header>
      <ul className="nav-items">
        <li className="nav-item"><a href="#">Home</a></li>
        <li className="nav-item"><a href="#">About</a></li>
        <li className="nav-item"><a href="#">Contact</a></li>
        <li className="nav-item"><a href="#"><RiInstagramLine /></a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
