import { useEffect, useState } from "react";
import "../../scss/homePage/Gallery.scss";
import { listOfArtworks } from "../../listOfArtworks";

function Gallery() {
  const [row1, setRow1] = useState([]);
  const [row2, setRow2] = useState([]);
  const [row3, setRow3] = useState([]);
  const [windowWidth,setWindowWidth]=useState(window.innerWidth)

  useEffect(() => {
    //Deep copy listOfArtworks to arrToBeSpliced, as splice will destroy the array it operates on, redeclaring arrToBeSpliced means there will always be an array to be spliced everytime we re-render this page.
    let arrToBeSpliced: any = [];
    listOfArtworks.map((obj) => arrToBeSpliced.push(Object.assign({}, obj)));
    //useEffect will rerender based on screen width.
    window.addEventListener('resize',()=>setWindowWidth(window.innerWidth));
    let result: any = [];
    if (window.innerWidth > 600) {
      // split the array of artworks into three arrays, to fill up three vertical columns
      for (let i = 3; i > 0; i--) {
        result.push(
          arrToBeSpliced.splice(0, Math.ceil(arrToBeSpliced.length / i))
        );
      }
      setRow1(result[0]);
      setRow2(result[1]);
      setRow3(result[2]);
    } else if (window.innerWidth <= 600) {
      for (let i = 2; i > 0; i--) {
        result.push(
          arrToBeSpliced.splice(0, Math.ceil(arrToBeSpliced.length / i))
        );
      }
      setRow1(result[0]);
      setRow2(result[1]);
      setRow3([]);
      console.log(result);
    }
    return ()=>window.removeEventListener('resize',()=>setWindowWidth(window.innerWidth))
  }, [windowWidth]);

  return (
    <section className="gallery-section">
      <div className="col" id="col1">
        {row1
          ? row1.map((item: any) => (
              <a href="" className="img-card" key={item.key}>
                <div className="img-container">
                  <img src={item.img} alt="" />
                </div>
                <div className="text-container">
                  <p className="img-text">{item.text}</p>
                </div>
              </a>
            ))
          : null}
      </div>
      <div className="col" id="col2">
        {row2
          ? row2.map((item: any) => (
              <a href="" className="img-card" key={item.key}>
                <div className="img-container">
                  <img src={item.img} alt="" />
                </div>
                <div className="text-container">
                  <p className="img-text">{item.text}</p>
                </div>
              </a>
            ))
          : null}
      </div>
      <div className="col" id="col3">
        {row3
          ? row3.map((item: any) => (
              <a href="" className="img-card" key={item.key}>
                <div className="img-container">
                  <img src={item.img} alt="" />
                </div>
                <div className="text-container">
                  <p className="img-text">{item.text}</p>
                </div>
              </a>
            ))
          : null}
      </div>
    </section>
  );
}

export default Gallery;
