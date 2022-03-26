import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/homePage/Home";
import About from "./components/aboutPage/About";
import Contact from "./components/contactPage/Contact";
//sdfgdfg
function App() {
  return (
    <div className="App">
      {/* React router dom works with the actual dom, so it's more optimize */}
      <Router basename={process.env.PUBLIC_URL}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
