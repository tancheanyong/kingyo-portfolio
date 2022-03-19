import { useEffect, useState } from "react";
import "../../scss/homePage/Gallery.scss";
import {listOfArtworks} from '../../listOfArtworks'

function Gallery() {
  const [row1, setRow1] = useState([]);
  const [row2, setRow2] = useState([]);
  const [row3, setRow3] = useState([]);
  
  useEffect(() => {
    //Deep copy listOfArtworks to arrToBeSpliced, as splice will destroy the array it operates on, redeclaring arrToBeSpliced means there will always be an array to be spliced everytime we re-render this page. 
    let arrToBeSpliced:any=[];
    listOfArtworks.map(obj=>arrToBeSpliced.push(Object.assign({},obj)));

    let result: any = [];
    // split the array of artworks into three arrays, to fill up three vertical columns
    for (let i = 3; i > 0; i--) {
      result.push(
        arrToBeSpliced.splice(0, Math.ceil(arrToBeSpliced.length / i))
      );
    }
    setRow1(result[0]);
    setRow2(result[1]);
    setRow3(result[2]);
    

  }, []);

  return (
    <section className="gallery-section">
      <div className="col">
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
      <div className="col">
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
      <div className="col">
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
