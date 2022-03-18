import "./App.css";
import Gallery from "./components/homePage/Gallery";
import Header from "./components/homePage/Header";
import Navbar from "./components/homePage/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Gallery />
    </div>
  );
}

export default App;
