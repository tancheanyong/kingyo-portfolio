import { AiOutlineArrowDown } from "react-icons/ai";
import '../../scss/Header.scss'
export default function Header() {
  return (
    <section className="header-section">
      <p className="sub-header-1">Digital Portrait Artist</p>
      <p className="sub-header-2">Exploring the Depths of Faces</p>
      <p className="sub-header-1">
        Here is some of my artwork
        <AiOutlineArrowDown />
      </p>
    </section>
  );
}
