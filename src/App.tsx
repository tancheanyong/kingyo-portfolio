import "./App.css";
import Gallery from "./components/homePage/Gallery";
import Header from "./components/homePage/Header";
import Navbar from "./components/homePage/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
