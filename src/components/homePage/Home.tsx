import Header from "./Header";
import Gallery from "./Gallery";
import {useEffect} from 'react';

function Home() {
  
  useEffect(() => {
    let header = document.querySelector(".header-section");
    let gallery = document.querySelector('.gallery-section')
    header?.classList.add("fade-in");
    gallery?.classList.add('fade-in');
  }, []);

  return (
    <div>
      <Header />
      <Gallery />
    </div>
  );
}

export default Home;
